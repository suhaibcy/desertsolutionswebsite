/* @ds-bundle: {"format":4,"namespace":"DesertSolutionsDesignSystem_96d1ce","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/ServiceIcon.jsx"},{"name":"ServiceIcon","sourcePath":"components/core/ServiceIcon.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"QuoteForm","sourcePath":"components/forms/QuoteForm.jsx"},{"name":"ConsultationBand","sourcePath":"components/marketing/ConsultationBand.jsx"},{"name":"CtaBand","sourcePath":"components/marketing/CtaBand.jsx"},{"name":"HeroBand","sourcePath":"components/marketing/HeroBand.jsx"},{"name":"ImageFrame","sourcePath":"components/marketing/ImageFrame.jsx"},{"name":"ProcessSteps","sourcePath":"components/marketing/ProcessSteps.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatBand","sourcePath":"components/marketing/StatBand.jsx"},{"name":"StatRow","sourcePath":"components/marketing/StatRow.jsx"},{"name":"TickerBand","sourcePath":"components/marketing/TickerBand.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"},{"name":"UtilityBar","sourcePath":"components/navigation/UtilityBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"c7b3d5c772f3","components/core/Button.jsx":"39050f207aaa","components/core/Card.jsx":"fa31ea341d86","components/core/IconButton.jsx":"a37280667f9e","components/core/Logo.jsx":"03f576568abf","components/core/SectionHeading.jsx":"e3dadb0f5d80","components/core/ServiceIcon.jsx":"cad829fb205e","components/forms/Field.jsx":"063c9da7e4ce","components/forms/QuoteForm.jsx":"cd328fd14a24","components/marketing/ConsultationBand.jsx":"7b13e50b91d9","components/marketing/CtaBand.jsx":"2501cb43eb72","components/marketing/HeroBand.jsx":"e81927ca4974","components/marketing/ImageFrame.jsx":"e7324a16e472","components/marketing/ProcessSteps.jsx":"347b739feddf","components/marketing/ServiceCard.jsx":"81fe19d96a56","components/marketing/StatBand.jsx":"794455afda30","components/marketing/StatRow.jsx":"a2390a5952dc","components/marketing/TickerBand.jsx":"1a180d72ad99","components/navigation/Footer.jsx":"5fccbeac08ab","components/navigation/TopNav.jsx":"666e6ddeb92f","components/navigation/UtilityBar.jsx":"cbabb47e0729","ui_kits/website/Sections.jsx":"1e7496c93630","ui_kits/website/Site.jsx":"99ae27bf2a6f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesertSolutionsDesignSystem_96d1ce = window.DesertSolutionsDesignSystem_96d1ce || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  variant = 'accent',
  pill = false,
  dot = false,
  icon,
  children,
  style,
  ...rest
}) {
  const skins = {
    accent: {
      background: 'rgba(123,185,46,.12)',
      color: 'var(--text-accent)',
      border: 'var(--border-width) solid rgba(123,185,46,.35)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: 'var(--border-width) solid var(--border-hairline)'
    },
    solid: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: 'var(--border-width) solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
      padding: pill ? '7px 14px' : '6px 10px',
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--label-uppercase)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...skins[variant],
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--accent)'
    }
  }) : null, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const btnBase = {
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  fontSize: 'var(--button-size)',
  letterSpacing: 'var(--tracking-button)',
  borderRadius: 'var(--radius-md)',
  border: 'var(--border-width) solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-md)',
  textDecoration: 'none',
  transition: 'var(--transition-control)',
  whiteSpace: 'nowrap'
};
const btnSizes = {
  lg: {
    minHeight: 56,
    padding: '0 var(--space-xl)',
    fontSize: 16
  },
  md: {
    minHeight: 'var(--control-height)',
    padding: '0 var(--space-xl)'
  },
  sm: {
    minHeight: 'var(--control-height-sm)',
    padding: '0 var(--space-lg)',
    fontSize: 14
  }
};

/** Circular trailing arrow, borrowed from the reference layout's CTA treatment. */
function Arrow({
  tone
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: tone === 'dark' ? 'rgba(11,12,10,.16)' : 'rgba(123,185,46,.18)',
      fontSize: 12,
      lineHeight: 1,
      fontFamily: 'var(--font-body)'
    }
  }, "\u2197");
}
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  fullWidth = false,
  arrow = false,
  icon,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const variants = {
    primary: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--text-on-accent)',
      borderColor: 'transparent'
    },
    secondary: {
      background: hover ? 'rgba(123,185,46,.12)' : 'transparent',
      color: 'var(--accent)',
      borderColor: hover ? 'var(--accent-hover)' : 'var(--accent)'
    },
    ghost: {
      background: 'transparent',
      color: hover ? 'var(--accent-hover)' : 'var(--text-body)',
      borderColor: 'transparent'
    },
    onSunset: {
      background: hover ? 'var(--ds-on-dark)' : 'var(--ds-canvas)',
      color: hover ? 'var(--ds-canvas)' : 'var(--ds-on-dark)',
      borderColor: 'transparent'
    }
  };
  const s = {
    ...btnBase,
    ...btnSizes[size],
    ...variants[variant],
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : undefined,
    transform: press ? 'translateY(1px)' : 'none',
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon, children, arrow ? /*#__PURE__*/React.createElement(Arrow, {
    tone: variant === 'primary' ? 'dark' : 'accent'
  }) : null);
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: s
  }, handlers, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: s,
    disabled: disabled
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  elevated = false,
  interactive = false,
  padding = 'var(--space-xl)',
  radius = 'var(--radius-md)',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      background: elevated ? 'var(--surface-elevated)' : 'var(--surface-card)',
      border: 'var(--border-width) solid ' + (hover ? 'var(--border-accent)' : 'var(--border-hairline)'),
      borderRadius: radius,
      padding,
      transition: 'border-color var(--dur-med) var(--ease-out),transform var(--dur-med) var(--ease-out)',
      transform: hover ? 'translateY(-2px)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = () => typeof window !== 'undefined' && window.DS_ASSET_BASE || '/assets/';
const FILES = {
  mark: 'logo-mark.png',
  wordmark: 'logo-wordmark.png'
};
function Logo({
  variant = 'mark',
  height = 52,
  href,
  style,
  ...rest
}) {
  const img = /*#__PURE__*/React.createElement("img", _extends({
    src: base() + FILES[variant],
    alt: "Desert Solutions Landscaping & Yard Services",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'inline-block',
      lineHeight: 0
    }
  }, img) : img;
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  size = 'lg',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth: align === 'center' ? 720 : 640,
      margin: align === 'center' ? '0 auto' : undefined,
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "ds-label"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: size === 'lg' ? 'ds-display-lg' : 'ds-display-md'
  }, title), intro ? /*#__PURE__*/React.createElement("p", {
    className: "ds-body",
    style: {
      color: 'var(--text-muted)',
      maxWidth: '60ch'
    }
  }, intro) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON_NAMES = ['mower', 'grass-tuft', 'grass-blades', 'mulch-rock', 'bush', 'leaf', 'house', 'sparkles', 'trash', 'truck', 'haul-truck', 'branch', 'pin', 'person', 'phone', 'mail'];
/** Override with window.DS_ASSET_BASE when the page is not served from the project root. */
const base = () => typeof window !== 'undefined' && window.DS_ASSET_BASE || '/assets/';
function ServiceIcon({
  name,
  size = 28,
  tone = 'accent',
  alt = '',
  style,
  ...rest
}) {
  const filters = {
    accent: 'none',
    dark: 'brightness(0.25) saturate(0)',
    chrome: 'grayscale(1) brightness(2.2)',
    muted: 'grayscale(1) brightness(1.35) opacity(.75)'
  };
  return /*#__PURE__*/React.createElement("img", _extends({
    src: base() + 'icons/' + name + '.png',
    alt: alt,
    "aria-hidden": alt ? undefined : true,
    style: {
      width: size,
      height: 'auto',
      display: 'block',
      filter: filters[tone],
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { ICON_NAMES, ServiceIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  name,
  label,
  size = 44,
  variant = 'outline',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skins = {
    outline: {
      background: hover ? 'rgba(123,185,46,.12)' : 'transparent',
      border: 'var(--border-width) solid var(--border-accent)'
    },
    solid: {
      background: hover ? 'var(--accent-hover)' : 'var(--accent)',
      border: 'var(--border-width) solid transparent'
    },
    tile: {
      background: hover ? 'var(--surface-elevated)' : 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      ...skins[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
    name: name,
    size: Math.round(size * 0.52),
    tone: variant === 'solid' ? 'dark' : 'accent'
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldCtl = {
  width: '100%',
  boxSizing: 'border-box',
  minHeight: 'var(--control-height)',
  padding: '0 var(--space-lg)',
  background: 'var(--surface-field)',
  color: 'var(--text-body)',
  border: 'var(--border-width) solid var(--border-hairline)',
  borderRadius: 'var(--radius-sm)',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--body-md)',
  outline: 'none',
  transition: 'var(--transition-control)'
};
function Field({
  label,
  hint,
  required = false,
  as = 'input',
  options = [],
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const ctl = {
    ...fieldCtl,
    borderColor: focus ? 'var(--border-accent)' : 'var(--border-hairline)',
    boxShadow: focus ? '0 0 0 2px rgba(155,212,86,.25)' : 'none',
    ...style
  };
  const shared = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: ctl,
    ...rest
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--body-sm)',
      color: 'var(--text-body)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, " *") : null), as === 'select' ? /*#__PURE__*/React.createElement("select", _extends({}, shared, {
    style: {
      ...ctl,
      appearance: 'none',
      backgroundImage: 'linear-gradient(45deg,transparent 50%,var(--accent) 50%),linear-gradient(135deg,var(--accent) 50%,transparent 50%)',
      backgroundPosition: 'calc(100% - 20px) 21px,calc(100% - 14px) 21px',
      backgroundSize: '6px 6px,6px 6px',
      backgroundRepeat: 'no-repeat'
    }
  }), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))) : as === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, shared, {
    style: {
      ...ctl,
      minHeight: 'unset',
      padding: 'var(--space-md) var(--space-lg)',
      lineHeight: 'var(--lh-body)',
      resize: 'vertical'
    }
  })) : /*#__PURE__*/React.createElement("input", shared), hint ? /*#__PURE__*/React.createElement("span", {
    className: "ds-body-sm"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuoteForm.jsx
try { (() => {
function QuoteForm({
  services = ['Yard cleanup', 'Mowing', 'Weed removal', 'Mulch & rock', 'Bush trimming', 'Leaf / debris cleanup', 'Property maintenance', 'Pressure washing (light work)'],
  onSubmit,
  style
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-elevated)',
      border: 'var(--border-width) solid var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xxl)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, "Free estimate"), /*#__PURE__*/React.createElement("h3", {
    className: "ds-display-md"
  }, "Get a free estimate"), /*#__PURE__*/React.createElement("p", {
    className: "ds-body-sm"
  }, "Tell me where the yard is and what it needs. I'll call you back with a price.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Phone",
    type: "tel",
    placeholder: "505 000 0000",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Service needed",
    as: "select",
    options: services
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Service address",
    placeholder: "Street, Albuquerque",
    required: true
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Anything I should know?",
    as: "textarea",
    rows: 3,
    placeholder: "Gate code, dog in the yard, how tall the weeds are."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xl)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    onClick: () => {
      setSent(true);
      onSubmit && onSubmit();
    }
  }, sent ? 'Sent — I\u2019ll call you back' : 'Send request'), /*#__PURE__*/React.createElement("span", {
    className: "ds-body-sm"
  }, "Or call or text ", /*#__PURE__*/React.createElement("a", {
    href: "tel:5054037780"
  }, "505 403 7780"), ".")));
}
Object.assign(__ds_scope, { QuoteForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuoteForm.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ConsultationBand.jsx
try { (() => {
const base = () => typeof window !== 'undefined' && window.DS_ASSET_BASE || '/assets/';
function ConsultationBand({
  headline = "Let's get the yard handled",
  body = 'No cost for the estimate and no pressure after it. Send the address and what it needs — I\u2019ll call you back with a price.',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)',
      padding: 'var(--space-section) var(--gutter)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base() + 'brand-card.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: .22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(11,12,10,.95) 0%,rgba(11,12,10,.7) 60%,rgba(11,12,10,.9) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
      gap: 'var(--space-xxl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    pill: true,
    dot: true
  }, "Get started now"), /*#__PURE__*/React.createElement("h2", {
    className: "ds-display-lg"
  }, headline), /*#__PURE__*/React.createElement("p", {
    className: "ds-body",
    style: {
      color: 'var(--text-muted)',
      maxWidth: '40ch'
    }
  }, body), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    arrow: true,
    href: "tel:5054037780"
  }, "Call 505 403 7780")), /*#__PURE__*/React.createElement(__ds_scope.QuoteForm, null)));
}
Object.assign(__ds_scope, { ConsultationBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ConsultationBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CtaBand.jsx
try { (() => {
function CtaBand({
  headline = 'Free estimate. Call or text.',
  sub = 'Same number reaches me directly.',
  phone = '505 403 7780',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--grad-sunset)',
      padding: 'var(--space-xxxl) var(--gutter)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grad-dark-overlay)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 720,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-xl)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ds-display-lg"
  }, headline), /*#__PURE__*/React.createElement("p", {
    className: "ds-body",
    style: {
      color: 'var(--ds-on-dark)',
      opacity: .85
    }
  }, sub), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "onSunset",
    href: 'tel:' + phone.replace(/\s/g, '')
  }, "Call ", phone)));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ImageFrame.jsx
try { (() => {
const base = () => typeof window !== 'undefined' && window.DS_ASSET_BASE || '/assets/';

/** Arched or rounded image slot. Until jobsite photography exists it renders a labelled
 *  placeholder over the logo's desert artwork so the gap is visible, never faked. */
function ImageFrame({
  shape = 'arch',
  label = 'Jobsite photo needed',
  caption,
  src,
  alt = '',
  tilt = 0,
  height = 320,
  style
}) {
  const radii = {
    arch: '999px 999px var(--radius-lg) var(--radius-lg)',
    rounded: 'var(--radius-lg)',
    oval: '999px'
  };
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: 'relative',
      height,
      borderRadius: radii[shape],
      overflow: 'hidden',
      border: 'var(--border-width) solid var(--border-hairline)',
      transform: tilt ? 'rotate(' + tilt + 'deg)' : 'none',
      background: 'var(--surface-card)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,var(--surface-elevated) 0%,var(--surface-card) 100%)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base() + 'mountain-divider.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      opacity: .35
    }
  })), src ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-image)'
    }
  }) : null, !src ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-sm)',
      padding: 'var(--space-xl)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-label"
  }, label), caption ? /*#__PURE__*/React.createElement("span", {
    className: "ds-body-sm",
    style: {
      maxWidth: '24ch'
    }
  }, caption) : null) : caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-body-sm"
  }, caption)) : null);
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/marketing/HeroBand.jsx
try { (() => {
const base = () => typeof window !== 'undefined' && window.DS_ASSET_BASE || '/assets/';
function HeroBand({
  eyebrow = 'Owner-operated · Albuquerque',
  headline = 'Clean yards. Better views.',
  sub = 'Mowing, cleanup, mulch and rock, bush trimming — one call, one guy, no runaround.',
  phone = '505 403 7780',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)',
      padding: 'var(--space-xxxl) var(--gutter) var(--space-section)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--glow-sunset)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--glow-green)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: base() + 'mountain-divider.png',
    alt: "",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      opacity: .5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))',
      gap: 'var(--space-xxl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    pill: true,
    dot: true
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "ds-display-xl",
    style: {
      maxWidth: '11ch'
    }
  }, headline), /*#__PURE__*/React.createElement("p", {
    className: "ds-body",
    style: {
      fontSize: 'var(--body-lg)',
      color: 'var(--text-muted)',
      maxWidth: '42ch'
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-lg)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    arrow: true
  }, "Get your free estimate"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "secondary",
    href: 'tel:' + phone.replace(/\s/g, ''),
    icon: /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
      name: "phone",
      size: 18
    })
  }, phone))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 'var(--space-lg)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    shape: "arch",
    height: 400,
    label: "Hero photo needed",
    caption: "A finished yard \u2014 wide shot, late light."
  }), /*#__PURE__*/React.createElement(__ds_scope.ImageFrame, {
    shape: "oval",
    height: 280,
    label: "Robert on the job"
  }))));
}
Object.assign(__ds_scope, { HeroBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/HeroBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessSteps.jsx
try { (() => {
function ProcessSteps({
  steps = [{
    icon: 'phone',
    title: 'Call or text',
    body: 'Tell me the address and what the yard needs. I answer my own phone.'
  }, {
    icon: 'mower',
    title: 'I quote and show up',
    body: 'Free estimate first, then a day that works for you. No deposit.'
  }, {
    icon: 'house',
    title: 'Clean yard, hauled clean',
    body: 'Clippings, weeds and debris leave with me. Better view from the window.'
  }],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
      gap: 'var(--space-xxl)',
      ...style
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(123,185,46,.10)',
      border: 'var(--border-width) solid rgba(123,185,46,.22)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
    name: s.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("span", {
    className: "ds-display-md",
    style: {
      fontSize: 22,
      color: 'var(--text-muted)'
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("h3", {
    className: "ds-title-md"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "ds-body-sm",
    style: {
      lineHeight: 'var(--lh-body)'
    }
  }, s.body))));
}
Object.assign(__ds_scope, { ProcessSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessSteps.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function ServiceCard({
  icon,
  name,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(123,185,46,.10)',
      border: 'var(--border-width) solid rgba(123,185,46,.22)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
    name: icon,
    size: 32
  })), /*#__PURE__*/React.createElement("h3", {
    className: "ds-title-md"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "ds-body-sm",
    style: {
      lineHeight: 'var(--lh-body)'
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBand.jsx
try { (() => {
function StatBand({
  items = [{
    value: '1',
    label: 'Owner-operator — Robert, every job'
  }, {
    value: '9',
    label: 'Services, from mowing to haul-away'
  }, {
    value: '30',
    suffix: ' mi',
    label: 'Radius around Albuquerque'
  }, {
    value: '$0',
    label: 'Cost for an estimate'
  }],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
      gap: 'var(--space-xl)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      padding: '0 var(--space-xl)',
      borderLeft: i ? 'var(--border-width) solid var(--border-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-display-lg",
    style: {
      fontSize: 52,
      color: 'var(--text-heading)'
    }
  }, it.value, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, it.suffix || '')), /*#__PURE__*/React.createElement("span", {
    className: "ds-body-sm"
  }, it.label))));
}
Object.assign(__ds_scope, { StatBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatRow.jsx
try { (() => {
function StatRow({
  items = [{
    icon: 'person',
    value: 'Robert Tollardo',
    label: 'Owner & operator — you deal with me, not a call centre'
  }, {
    icon: 'pin',
    value: 'Albuquerque + 30 mi',
    label: 'Service area, travel included in the quote'
  }, {
    icon: 'grass-blades',
    value: '8 services',
    label: 'Cleanup, mowing, weeds, mulch, trimming, leaves, upkeep, washing'
  }],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--space-xl)',
      borderTop: 'var(--border-width) solid var(--border-hairline)',
      borderBottom: 'var(--border-width) solid var(--border-hairline)',
      padding: 'var(--space-xxl) 0',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-lg)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
    name: it.icon,
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-title-md"
  }, it.value), /*#__PURE__*/React.createElement("span", {
    className: "ds-body-sm"
  }, it.label)))));
}
Object.assign(__ds_scope, { StatRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatRow.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TickerBand.jsx
try { (() => {
const base = () => typeof window !== 'undefined' && window.DS_ASSET_BASE || '/assets/';
function TickerBand({
  items = ['Yard cleanup', 'Mowing', 'Weed removal', 'Mulch & rock', 'Bush trimming', 'Leaf cleanup', 'Haul-away', 'Pressure washing'],
  speed = 38,
  style
}) {
  const run = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--accent-deep)',
      borderTop: 'var(--border-width) solid var(--border-hairline)',
      borderBottom: 'var(--border-width) solid var(--border-hairline)',
      padding: 'var(--space-lg) 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes ds-ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xxl)',
      width: 'max-content',
      animation: 'ds-ticker ' + speed + 's linear infinite',
      alignItems: 'center'
    }
  }, run.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-xxl)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-display-md",
    style: {
      fontSize: 26,
      color: 'var(--ds-on-dark)',
      whiteSpace: 'nowrap'
    }
  }, t), /*#__PURE__*/React.createElement("img", {
    src: base() + 'icons/leaf.png',
    alt: "",
    style: {
      width: 18,
      filter: 'brightness(0.2) saturate(0)'
    }
  })))));
}
Object.assign(__ds_scope, { TickerBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TickerBand.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  phone = '505 403 7780',
  email = 'robert@tollardo.com',
  area = 'Albuquerque and the surrounding area',
  links = ['Services', 'How it works', 'Service area', 'Get a quote'],
  services = ['Yard cleanup', 'Mowing', 'Weed removal', 'Mulch & rock', 'Bush trimming', 'Haul-away'],
  style
}) {
  const col = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-md)'
  };
  const link = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--body-sm)',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-footer)',
      borderTop: 'var(--border-width) solid var(--border-hairline)',
      padding: 'var(--space-xxxl) var(--gutter) var(--space-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 'var(--space-xxl)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "wordmark",
    height: 76
  }), /*#__PURE__*/React.createElement("p", {
    className: "ds-body",
    style: {
      color: 'var(--text-muted)',
      maxWidth: '30ch'
    }
  }, "Clean yards. Better views. Owner-operated by Robert Tollardo.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-label"
  }, "Quick links"), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase().replace(/\s/g, '-'),
    style: link
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-label"
  }, "Services"), services.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: link
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-label"
  }, "Contact"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      alignItems: 'center',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
    name: "phone",
    size: 18
  }), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + phone.replace(/\s/g, '')
  }, phone)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      alignItems: 'center',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
    name: "mail",
    size: 18
  }), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email
  }, email)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-sm)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
    name: "pin",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-body-sm"
  }, area)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: 'var(--space-xxl) auto 0',
      paddingTop: 'var(--space-lg)',
      borderTop: 'var(--border-width) solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-lg)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-body-sm"
  }, "\xA9 Desert Solutions Landscaping & Yard Services"), /*#__PURE__*/React.createElement("span", {
    className: "ds-body-sm"
  }, "Free estimates \u2014 call or text.")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav({
  links = ['Services', 'How it works', 'Service area', 'Get a quote'],
  phone = '505 403 7780',
  active,
  onNavigate,
  style
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(11,12,10,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: 'var(--border-width) solid var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-md) var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "wordmark",
    height: 60
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-xs)',
      marginLeft: 'auto',
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-hairline)',
      borderRadius: 'var(--radius-pill)',
      padding: 'var(--space-xs)'
    }
  }, links.map(l => {
    const on = active === l;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      href: '#' + l.toLowerCase().replace(/\s/g, '-'),
      onClick: () => onNavigate && onNavigate(l),
      onMouseEnter: () => setHover(l),
      onMouseLeave: () => setHover(null),
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: on ? 700 : 500,
        fontSize: 'var(--body-sm)',
        color: on ? 'var(--text-on-accent)' : hover === l ? 'var(--accent-hover)' : 'var(--text-body)',
        background: on ? 'var(--accent)' : 'transparent',
        padding: '10px var(--space-lg)',
        borderRadius: 'var(--radius-pill)',
        textDecoration: 'none',
        transition: 'var(--transition-control)',
        whiteSpace: 'nowrap'
      }
    }, l);
  })), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + phone.replace(/\s/g, ''),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--accent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
    name: "phone",
    size: 20,
    tone: "dark"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-body-sm",
    style: {
      fontSize: 12
    }
  }, "Call now"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--body-md)',
      color: 'var(--text-body)',
      whiteSpace: 'nowrap'
    }
  }, phone)))));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/UtilityBar.jsx
try { (() => {
function UtilityBar({
  area = 'Albuquerque and the surrounding area',
  email = 'robert@tollardo.com',
  note = 'Owner-operated · free estimates',
  style
}) {
  const item = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-sm)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--body-sm)',
    color: 'var(--text-on-accent)',
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--accent-deep)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-sm) var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xl)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: item
  }, /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
    name: "pin",
    size: 14,
    tone: "dark"
  }), area), /*#__PURE__*/React.createElement("span", {
    style: item
  }, /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
    name: "mail",
    size: 14,
    tone: "dark"
  }), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      color: 'inherit'
    }
  }, email)), /*#__PURE__*/React.createElement("span", {
    style: {
      ...item,
      marginLeft: 'auto',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      fontSize: 'var(--label-uppercase)'
    }
  }, note)));
}
Object.assign(__ds_scope, { UtilityBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/UtilityBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  ServiceCard,
  StatBand,
  Card,
  Badge,
  Button,
  ServiceIcon,
  ProcessSteps,
  ImageFrame,
  TickerBand
} = window.DesertSolutionsDesignSystem_96d1ce;
const SERVICES = [{
  icon: 'grass-blades',
  name: 'Yard cleanup',
  description: 'Debris, weeds and general cleanup — hauled off when I leave.'
}, {
  icon: 'mower',
  name: 'Mowing',
  description: 'Mow, trim and blow. Front, back, or the whole lot.'
}, {
  icon: 'grass-tuft',
  name: 'Weed removal',
  description: 'Weed-eating or hand pulling where the string trimmer can\u2019t reach.'
}, {
  icon: 'mulch-rock',
  name: 'Mulch & rock',
  description: 'Spread and levelled. Labour only — materials billed separately.'
}, {
  icon: 'bush',
  name: 'Bush trimming',
  description: 'Shaped back off the walls and walkways, clippings removed.'
}, {
  icon: 'leaf',
  name: 'Leaf / debris cleanup',
  description: 'Raked, bagged and gone. Heavy leaf jobs take longer.'
}, {
  icon: 'house',
  name: 'Property maintenance',
  description: 'Keep a rental or second property tidy on a regular round.'
}, {
  icon: 'sparkles',
  name: 'Pressure washing',
  description: 'Light work — driveways, walkways, patio slabs.'
}, {
  icon: 'haul-truck',
  name: 'Haul-away',
  description: 'Old branches, bagged debris, yard junk. Dump fees extra.'
}];
function StatSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-xxl) var(--gutter)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner"
  }, /*#__PURE__*/React.createElement(StatBand, null)));
}
function AboutSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "about",
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 'var(--space-section)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    shape: "rounded",
    height: 200,
    tilt: -3,
    label: "Before",
    caption: "Overgrown side yard"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    shape: "rounded",
    height: 200,
    tilt: 3,
    label: "After",
    caption: "Same yard, cleared"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    shape: "rounded",
    height: 200,
    tilt: 2,
    label: "Mulch & rock"
  }), /*#__PURE__*/React.createElement(ImageFrame, {
    shape: "rounded",
    height: 200,
    tilt: -2,
    label: "Trimmed hedge line"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    pill: true,
    dot: true
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    className: "ds-display-lg"
  }, "One guy. Every job."), /*#__PURE__*/React.createElement("p", {
    className: "ds-body",
    style: {
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, "I'm Robert Tollardo. I run Desert Solutions myself \u2014 I quote the work, I do the work, and I answer the phone when you call about it. Yards out here don't need a lawn crew. They need somebody who knows what to cut back, what to haul off, and what rock to spread."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-lg)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    href: "tel:5054037780"
  }, "Call 505 403 7780"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    href: "mailto:robert@tollardo.com",
    icon: /*#__PURE__*/React.createElement(ServiceIcon, {
      name: "mail",
      size: 16
    })
  }, "Email me")))));
}
function ProcessSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "how-it-works"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xxl)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "How it works",
    title: "Three steps, no paperwork",
    intro: "Nothing is booked online and nothing is prepaid. You call, I look, we agree on a price."
  }), /*#__PURE__*/React.createElement(ProcessSteps, null)));
}
function ServicesSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "services",
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xxl)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What I do",
    title: "Services",
    intro: "Mowing, cleanup, mulch and rock, bush trimming \u2014 one call. Pricing is quoted per yard, so call and I'll take a look."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 'var(--space-xl)'
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.name
  }, s))))));
}
function AreaSection() {
  const towns = ['Albuquerque', 'Rio Rancho', 'Bernalillo', 'Corrales', 'Los Lunas', 'Bosque Farms', 'Tijeras', 'Edgewood'];
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "service-area"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 'var(--space-xxl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-xl)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Where I work",
    title: "Service area",
    intro: "Albuquerque and the surrounding area. Travel outside the normal area is added to the quote \u2014 I'll tell you up front."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-sm)'
    }
  }, towns.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    variant: "outline",
    pill: true,
    icon: /*#__PURE__*/React.createElement(ServiceIcon, {
      name: "pin",
      size: 14
    })
  }, t)))), /*#__PURE__*/React.createElement(ImageFrame, {
    shape: "arch",
    height: 340,
    label: "Map or route photo",
    caption: "Ask Robert for a shot of the truck on a job."
  })));
}
Object.assign(window, {
  SERVICES,
  StatSection,
  AboutSection,
  ProcessSection,
  ServicesSection,
  AreaSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
const {
  UtilityBar,
  TopNav,
  HeroBand,
  Footer,
  CtaBand,
  TickerBand,
  ConsultationBand,
  Button,
  ServiceIcon
} = window.DesertSolutionsDesignSystem_96d1ce;
function StickyCallBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      zIndex: 15,
      background: 'rgba(11,12,10,.94)',
      borderTop: '1px solid var(--border-hairline)',
      padding: 'var(--space-md) var(--gutter)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    href: "tel:5054037780",
    icon: /*#__PURE__*/React.createElement(ServiceIcon, {
      name: "phone",
      size: 16,
      tone: "dark"
    }),
    style: {
      maxWidth: 420
    }
  }, "Call or text 505 403 7780"));
}
function Site() {
  const [active, setActive] = React.useState('Services');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(UtilityBar, null), /*#__PURE__*/React.createElement(TopNav, {
    active: active,
    onNavigate: setActive
  }), /*#__PURE__*/React.createElement(HeroBand, null), /*#__PURE__*/React.createElement(StatSection, null), /*#__PURE__*/React.createElement(TickerBand, null), /*#__PURE__*/React.createElement(ProcessSection, null), /*#__PURE__*/React.createElement(ServicesSection, null), /*#__PURE__*/React.createElement(AboutSection, null), /*#__PURE__*/React.createElement(AreaSection, null), /*#__PURE__*/React.createElement(ConsultationBand, null), /*#__PURE__*/React.createElement(CtaBand, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(StickyCallBar, null));
}
const dsMount = document.getElementById('root');
if (dsMount) ReactDOM.createRoot(dsMount).render(/*#__PURE__*/React.createElement(Site, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.ServiceIcon = __ds_scope.ServiceIcon;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.QuoteForm = __ds_scope.QuoteForm;

__ds_ns.ConsultationBand = __ds_scope.ConsultationBand;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.HeroBand = __ds_scope.HeroBand;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.ProcessSteps = __ds_scope.ProcessSteps;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBand = __ds_scope.StatBand;

__ds_ns.StatRow = __ds_scope.StatRow;

__ds_ns.TickerBand = __ds_scope.TickerBand;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.UtilityBar = __ds_scope.UtilityBar;

})();
