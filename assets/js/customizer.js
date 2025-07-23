(function ($) {
  "use strict";

  $(document).ready(function () {
    // Load external HTML for the customizer panel
    if (typeof customizer !== 'undefined' && customizer) {
      $.get("../html/customizer.html", function (data) {
        $("body").append(data);

        const $body = $('body');

        // Utility Function
        function applyMode($element, attr, value, storageKey, toggleElement, iconLight, iconDark) {
          $body.attr(attr, value);
          localStorage.setItem(storageKey, value);
          $element.addClass('active-mode').siblings().removeClass('active-mode');
          if (toggleElement) {
            toggleElement.html(`<i class="ti ti-${value === 'dark' ? iconLight : iconDark}"></i>`);
          }
        }

        // Theme (Layout mode)
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyMode($(`[layoutmode-action="${savedTheme}"]`), 'data-bs-theme', savedTheme, 'theme', $('.action-dark'), 'sun', 'moon');

        $('.action-dark').on('click', function () {
          const currentTheme = $body.attr('data-bs-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          applyMode($(`[layoutmode-action="${newTheme}"]`), 'data-bs-theme', newTheme, 'theme', $('.action-dark'), 'sun', 'moon');
        });

        $(document).on('click', '[layoutmode-action]', function () {
          const mode = $(this).attr('layoutmode-action');
          applyMode($(this), 'data-bs-theme', mode, 'theme', $('.action-dark'), 'sun', 'moon');
        });

        // Sidebar Mode
        const savedSidebarTheme = localStorage.getItem('sidebarTheme') || 'light';
        applyMode($(`[sidebarmode-action="${savedSidebarTheme}"]`), 'data-sidebar-theme', savedSidebarTheme, 'sidebarTheme');

        $(document).on('click', '[sidebarmode-action]', function () {
          const mode = $(this).attr('sidebarmode-action');
          applyMode($(this), 'data-sidebar-theme', mode, 'sidebarTheme');
        });

        // Sidebar Type
        const savedSidebarType = localStorage.getItem('sidebartype') || 'full';
        $body.attr('data-bs-sidebar', savedSidebarType);
        $(`[sidebartype-action="${savedSidebarType}"]`).addClass('active-mode');

        $(document).on('click', '[sidebartype-action]', function () {
          const type = $(this).attr('sidebartype-action');
          localStorage.setItem('sidebartype', type);
          $body.attr('data-bs-sidebar', type);
          $('[sidebartype-action]').removeClass('active-mode');
          $(this).addClass('active-mode');
          window.location.reload();
        });

        // Horizontal Sidebar Scroll Logic
        if (savedSidebarType === 'horizontal') {
          const $menuWrapper = $('.codex-menuwrapper');
          const $menu = $('.codex-menu');
          let currentPosition = 0;

          function calculateMenuWidth() {
            let width = 0;
            $menu.children('li').each(function () {
              width += $(this).outerWidth();
            });
            $menu.css('width', width + 'px');
            return width;
          }

          const wrapperWidth = $menuWrapper.width();
          const menuWidth = calculateMenuWidth();

          function updateMenu() {
            const maxScroll = menuWidth - wrapperWidth;
            currentPosition = Math.max(0, Math.min(currentPosition, maxScroll));
            $menu.css({ position: 'relative', left: -currentPosition + 'px' });
            $('.menu-preve').toggleClass('disabled', currentPosition === 0);
            $('.menu-next').toggleClass('disabled', currentPosition >= maxScroll);
          }

          $('.menu-next').on('click', function () {
            currentPosition += $menu.children('li').outerWidth(true);
            updateMenu();
          });

          $('.menu-preve').on('click', function () {
            currentPosition -= $menu.children('li').outerWidth(true);
            updateMenu();
          });

          if (menuWidth > wrapperWidth) {
            updateMenu();
          } else {
            $('.menu-next, .menu-preve').addClass('disabled');
          }
        }

        // Sidebar responsive auto collapse
        if ($(window).width() > 1200 && typeof sidebar_compact !== 'undefined' && sidebar_compact) {
          $body.attr('data-bs-sidebar', 'compact');
        }

        if ($(window).width() < 1200) {
          $body.attr('data-bs-sidebar', 'compact');
        }

      }); // END $.get()
    }
  });

})(jQuery);