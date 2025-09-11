// Theme Settings
const dark_mode         = false;   // true | false
const sidebar_compact   = false;   // true | false
const sidebar_dark      = false;   // true | false
const customizer        = true;    // true | false

const themeprimary      = localStorage.getItem("themeprimary")   || '#1AB0B0';
const themesecondary    = localStorage.getItem("themesecondary") || '#ffa447';
const themesuccess      = localStorage.getItem("themesuccess")   || '#23c55e';
const themeinfo         = localStorage.getItem("themeinfo")      || '#00adff';
const themewarning      = localStorage.getItem("themewarning")   || '#fea346';
const themedanger       = localStorage.getItem("themedanger")    || '#f04444';

window.CodexFitNexus = {
  themeprimary,
  themesecondary,
  themesuccess,
  themeinfo,
  themewarning,
  themedanger
};
