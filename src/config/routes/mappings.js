/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides route mapping constants.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 */

const {
  BLOG,
  COMMUNITY,
  DOCS,
  DOCS_COLORS_AND_PALETTES,
  DOCS_SWATCHES,
  DOCS_USAGE,
  LANDING,
  PORTS,
  ROOT
} = require("./constants");

/**
 * The root route mapping.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_ROOT = ROOT;

/**
 * The route mapping for the `blog` page.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_BLOG = ROUTE_ROOT + BLOG;

/**
 * The route mapping for the `community` page.
 *
 * @constant {string}
 * @since 0.3.0
 */
const ROUTE_COMMUNITY = ROUTE_ROOT + COMMUNITY;

/**
 * The route mapping for the `docs` page.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_DOCS = ROUTE_ROOT + DOCS;

/**
 * The route mapping for the docs page of the "Nord JetBrains" port project.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_DOCS_PORTS_JETBRAINS = `${ROUTE_ROOT}${DOCS}/${PORTS}/jetbrains`;

/**
 * The route mapping for the development docs page of the "Nord JetBrains" port project.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_DOCS_PORTS_JETBRAINS_DEVELOPMENT = `${ROUTE_DOCS_PORTS_JETBRAINS}/development`;

/**
 * The route mapping for the installation docs page of the "Nord JetBrains" port project.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_DOCS_PORTS_JETBRAINS_INSTALLATION = `${ROUTE_DOCS_PORTS_JETBRAINS}/installation`;

/**
 * The route mapping for the language and plugin support docs page of the "Nord JetBrains" port project.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_DOCS_PORTS_JETBRAINS_SUPPORT = `${ROUTE_DOCS_PORTS_JETBRAINS}/support`;

/**
 * The route mapping for the troubleshooting guide docs page of the "Nord JetBrains" port project.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_DOCS_PORTS_JETBRAINS_TROUBLESHOOTING = `${ROUTE_DOCS_PORTS_JETBRAINS}/troubleshooting`;

/**
 * The route mapping for the docs page of the "Nord tmux" port project.
 *
 * @constant {string}
 * @since 0.16.0
 */
const ROUTE_DOCS_PORTS_TMUX = `${ROUTE_ROOT}${DOCS}/${PORTS}/tmux`;

/**
 * The route mapping for the theme configuration docs page of the "Nord tmux" port project.
 *
 * @constant {string}
 * @since 0.16.0
 */
const ROUTE_DOCS_PORTS_TMUX_CONFIGURATION = `${ROUTE_DOCS_PORTS_TMUX}/configuration`;

/**
 * The route mapping for the installation docs page of the "Nord tmux" port project.
 *
 * @constant {string}
 * @since 0.16.0
 */
const ROUTE_DOCS_PORTS_TMUX_INSTALLATION = `${ROUTE_DOCS_PORTS_TMUX}/installation`;

/**
 * The route mapping for the theme plugin support docs page of the "Nord tmux" port project.
 *
 * @constant {string}
 * @since 0.16.0
 */
const ROUTE_DOCS_PORTS_TMUX_PLUGIN_SUPPORT = `${ROUTE_DOCS_PORTS_TMUX}/plugin-support`;

/**
 * The route mapping for the docs page of the "Nord Vim" port project.
 *
 * @constant {string}
 * @since 0.13.0
 */
const ROUTE_DOCS_PORTS_VIM = `${ROUTE_ROOT}${DOCS}/${PORTS}/vim`;

/**
 * The route mapping for the theme configuration docs page of the "Nord Vim" port project.
 *
 * @constant {string}
 * @since 0.13.0
 */
const ROUTE_DOCS_PORTS_VIM_CONFIGURATION = `${ROUTE_DOCS_PORTS_VIM}/configuration`;

/**
 * The route mapping for the theme customization docs page of the "Nord Vim" port project.
 *
 * @constant {string}
 * @since 0.13.0
 */
const ROUTE_DOCS_PORTS_VIM_CUSTOMIZATION = `${ROUTE_DOCS_PORTS_VIM}/customization`;

/**
 * The route mapping for the installation docs page of the "Nord Vim" port project.
 *
 * @constant {string}
 * @since 0.13.0
 */
const ROUTE_DOCS_PORTS_VIM_INSTALLATION = `${ROUTE_DOCS_PORTS_VIM}/installation`;

/**
 * The route mapping for the docs page of the "Nord Visual Studio Code" port project.
 *
 * @constant {string}
 * @since 0.15.0
 */
const ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE = `${ROUTE_ROOT}${DOCS}/${PORTS}/visual-studio-code`;

/**
 * The route mapping for the theme customization docs page of the "Nord Visual Studio Code" port project.
 *
 * @constant {string}
 * @since 0.15.0
 */
const ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_CUSTOMIZATION = `${ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE}/customization`;

/**
 * The route mapping for the development docs page of the "Nord Visual Studio Code" port project.
 *
 * @constant {string}
 * @since 0.15.0
 */
const ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_DEVELOPMENT = `${ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE}/development`;

/**
 * The route mapping for the installation docs page of the "Nord Visual Studio Code" port project.
 *
 * @constant {string}
 * @since 0.15.0
 */
const ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_INSTALLATION = `${ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE}/installation`;

/**
 * The route mapping for the `docs` page about Nord's colors and palettes.
 *
 * @constant {string}
 * @since 0.11.0
 */
const ROUTE_DOCS_COLOR_AND_PALETTES = `${ROUTE_ROOT}${DOCS}/${DOCS_COLORS_AND_PALETTES}`;

/**
 * The route mapping for the `docs` page about Nord's color swatches.
 *
 * @constant {string}
 * @since 0.11.0
 */
const ROUTE_DOCS_SWATCHES = `${ROUTE_ROOT}${DOCS}/${DOCS_SWATCHES}`;

/**
 * The route mapping for the `docs` page about Nord's installation and usage.
 *
 * @constant {string}
 * @since 0.11.0
 */
const ROUTE_DOCS_USAGE = `${ROUTE_ROOT}${DOCS}/${DOCS_USAGE}`;

/**
 * The route mapping for the landing page.
 * Alias that will be redirected to `${ROUTE_ROOT}`.
 *
 * @constant {string}
 * @since 0.1.0
 */
const ROUTE_LANDING = ROUTE_ROOT + LANDING;

/**
 * The route mapping for the port projects page.
 *
 * @constant {string}
 * @since 0.3.0
 */
const ROUTE_PORTS = ROUTE_ROOT + PORTS;

/**
 * The route mapping for the "Nord JetBrains" port project page.
 *
 * @constant {string}
 * @since 0.12.0
 */
const ROUTE_PORTS_JETBRAINS = `${ROUTE_ROOT}/${PORTS}/jetbrains`;

/**
 * The route mapping for the "Nord JetBrains" port project page.
 *
 * @constant {string}
 * @since 0.16.0
 */
const ROUTE_PORTS_TMUX = `${ROUTE_ROOT}/${PORTS}/tmux`;

/**
 * The route mapping for the "Nord Vim" port project page.
 *
 * @constant {string}
 * @since 0.13.0
 */
const ROUTE_PORTS_VIM = `${ROUTE_ROOT}/${PORTS}/vim`;

/**
 * The route mapping for the "Nord Visual Studio Code" port project page.
 *
 * @constant {string}
 * @since 0.15.0
 */
const ROUTE_PORTS_VISUAL_STUDIO_CODE = `${ROUTE_ROOT}/${PORTS}/visual-studio-code`;

/**
 * The per-route unique `id` attribute values of sections components.
 *
 * @constant {Object}
 * @since 0.6.0
 */
const SECTION_COMPONENT_IDS = {
  [ROUTE_COMMUNITY]: ["hero", "chat-channels", "content"],
  [ROUTE_DOCS]: ["hero", "contents"],
  [ROUTE_DOCS_PORTS_JETBRAINS]: ["hero", "contents"],
  [ROUTE_DOCS_PORTS_VIM]: ["hero", "contents"],
  [ROUTE_PORTS]: ["hero", "search"],
  [ROUTE_PORTS_JETBRAINS]: ["hero", "introduction", "syntax", "editor-details", "ui-elements", "setup"],
  [ROUTE_PORTS_TMUX]: ["hero", "introduction", "ui-elements", "plugin-support", "configurations", "setup"],
  [ROUTE_PORTS_VIM]: ["hero", "introduction", "syntax", "editor-details", "plugin-support", "configurations", "setup"],
  [ROUTE_PORTS_VISUAL_STUDIO_CODE]: ["hero", "introduction", "syntax", "editor-details", "ui-elements", "setup"],
  [ROUTE_ROOT]: [
    "hero",
    "palettes-modularity",
    "palettes-contrast",
    "ports",
    "swatches",
    "syntax-highlighting",
    "community"
  ]
};

module.exports = {
  ROUTE_BLOG,
  ROUTE_COMMUNITY,
  ROUTE_DOCS_COLOR_AND_PALETTES,
  ROUTE_DOCS_PORTS_JETBRAINS_DEVELOPMENT,
  ROUTE_DOCS_PORTS_JETBRAINS_INSTALLATION,
  ROUTE_DOCS_PORTS_JETBRAINS_SUPPORT,
  ROUTE_DOCS_PORTS_JETBRAINS_TROUBLESHOOTING,
  ROUTE_DOCS_PORTS_JETBRAINS,
  ROUTE_DOCS_PORTS_TMUX_CONFIGURATION,
  ROUTE_DOCS_PORTS_TMUX_INSTALLATION,
  ROUTE_DOCS_PORTS_TMUX_PLUGIN_SUPPORT,
  ROUTE_DOCS_PORTS_TMUX,
  ROUTE_DOCS_PORTS_VIM_CONFIGURATION,
  ROUTE_DOCS_PORTS_VIM_CUSTOMIZATION,
  ROUTE_DOCS_PORTS_VIM_INSTALLATION,
  ROUTE_DOCS_PORTS_VIM,
  ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_CUSTOMIZATION,
  ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_DEVELOPMENT,
  ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE_INSTALLATION,
  ROUTE_DOCS_PORTS_VISUAL_STUDIO_CODE,
  ROUTE_DOCS_SWATCHES,
  ROUTE_DOCS_USAGE,
  ROUTE_DOCS,
  ROUTE_LANDING,
  ROUTE_PORTS_JETBRAINS,
  ROUTE_PORTS_TMUX,
  ROUTE_PORTS_VIM,
  ROUTE_PORTS_VISUAL_STUDIO_CODE,
  ROUTE_PORTS,
  ROUTE_ROOT,
  SECTION_COMPONENT_IDS
};
