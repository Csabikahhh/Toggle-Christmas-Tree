function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class CleanToggle extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { animate: false };
    _defineProperty(this, "toggle",














    e => {
      this.setState({ on: !this.state.on });
    });_defineProperty(this, "componentDidUpdate",

































    e => {
      let tl = gsap.timeline();

      tl.
      to([this.dotLBg, this.dotGroup], 1, {
        x: this.state.on ? 84 : 0,
        transformOrigin: "50% 50%",
        ease: 'power3.inOut' }).

      to(
      this.toggleBg,
      1,
      {
        fill: this.state.on ? "#43B86C" : "#BC4B51",
        ease: Sine.easeInOut },

      "-=1").

      to(
      this.patternColor,
      1,
      {
        fill: this.state.on ? "#43B86C" : "#BC4B51",
        ease: 'power3.inOut' },

      "-=1").

      staggerTo('.baubles', 1, {
        //cycle:{

        fill: gsap.utils.wrap([this.state.on ? "#BC4B51" : "#43B86C", this.state.on ? "#43B86C" : "#BC4B51"]),
        //}

        ease: 'power3.inOut' },
      0,
      "-=1").

      to(
      this.starPattern,
      1,
      {
        attr: {
          x: this.state.on ? 210 : 0 },

        transformOrigin: "50% 50%",
        ease: 'power3.inOut' },

      "-=1").

      to(
      ".baubleGradStopColor",
      1,
      {
        stopColor: this.state.on ? "#184A13" : "#491615" },

      "-=1").

      to(this.star, {
        fillOpacity: this.state.on ? 0 : 1 },
      '-=1');

    });this.state = { on: true };this._on = true;this._inVars = {};this._outVars = {};this._count = 0;this._customEase = CustomEase.create("customSine", "M0,0 C0.2,0 0.375,0.304 0.507,0.512 0.912,1.15 0.96,1.056 1,1");}onLoaded() {}componentDidMount() {let baubles = gsap.utils.shuffle(gsap.utils.toArray('#colorTreeGroup circle'));var tl = gsap.timeline();tl.from(baubles, { attr: { r: 0 }, duration: 2, ease: 'elastic(0.5, 0.8)', stagger: 0.005 }).from(this.star, { scale: 0, duration: 1.8, transformOrigin: '50% 100%', ease: 'elastic(0.5, 0.8)' }, '-=1').fromTo(this.wholeToggle, { scale: 0, transformOrigin: '50% 50%', y: 190 }, { duration: 1.8, y: 190, scale: 0.7, transformOrigin: '50% 50%', ease: 'elastic(0.5, 0.8)' }, '-=1.8');this.toggle();}

  render() {
    return (
      React.createElement("svg", {
        viewBox: "0 0 800 600",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink" },


      React.createElement("defs", null,
      React.createElement("g", { id: "treeGroup" },
      React.createElement("rect", { width: "100%", height: "470", fill: "#FFF", rx: "80", ry: "80" }),

      React.createElement("g", { fill: "#000" },
      React.createElement("circle", { cx: "324.62", cy: "297.75", r: "13.03" }),
      React.createElement("circle", { cx: "448.79", cy: "198.74", r: "9.55" }),
      React.createElement("circle", { cx: "384.89", cy: "250.95", r: "5.26" }),
      React.createElement("circle", { cx: "380.12", cy: "193.12", r: "5.26" }),
      React.createElement("circle", { cx: "381.53", cy: "280.07", r: "12.53" }),
      React.createElement("circle", { cx: "418.65", cy: "292.85", r: "19.48" }),
      React.createElement("circle", { cx: "488.35", cy: "354.99", r: "17.25" }),
      React.createElement("circle", { cx: "295.61", cy: "386.81", r: "15.25" }),
      React.createElement("circle", { cx: "372.42", cy: "221.34", r: "15" }),
      React.createElement("circle", { cx: "371.28", cy: "165.7", r: "16.78" }),
      React.createElement("circle", { cx: "396.77", cy: "71.89", r: "17.15" }),
      React.createElement("circle", { cx: "463.88", cy: "265.47", r: "14.99" }),
      React.createElement("circle", { cx: "394.06", cy: "437.32", r: "16.47" }),
      React.createElement("circle", { cx: "510.16", cy: "422.33", r: "16.95" }),
      React.createElement("circle", { cx: "267.16", cy: "446.84", r: "6.14" }),
      React.createElement("circle", { cx: "532.1", cy: "445.73", r: "6.88" }),
      React.createElement("circle", { cx: "316.24", cy: "444.75", r: "6.88" }),
      React.createElement("circle", { cx: "347.52", cy: "223.79", r: "6.64" }),
      React.createElement("circle", { cx: "398.01", cy: "207.97", r: "7.86" }),
      React.createElement("circle", { cx: "311.87", cy: "322.56", r: "9.06" }),
      React.createElement("circle", { cx: "458.83", cy: "372.43", r: "10.08" }),
      React.createElement("circle", { cx: "371.28", cy: "379.45", r: "8.85" }),
      React.createElement("circle", { cx: "488.35", cy: "391.98", r: "12.04" }),
      React.createElement("circle", { cx: "487.36", cy: "444.26", r: "9.06" }),
      React.createElement("circle", { cx: "429.26", cy: "136.68", r: "3.98" }),
      React.createElement("circle", { cx: "463.88", cy: "239.29", r: "3.98" }),
      React.createElement("circle", { cx: "510.06", cy: "393.1", r: "3.98" }),
      React.createElement("circle", { cx: "361.88", cy: "447.75", r: "3.69" }),
      React.createElement("circle", { cx: "390.64", cy: "408.38", r: "3.69" })),

      React.createElement("g", { fill: "#000" },
      React.createElement("circle", { cx: "365.99", cy: "329.09", r: "34.65" }),
      React.createElement("circle", { cx: "446.94", cy: "421.02", r: "32.93" }),
      React.createElement("circle", { cx: "344.84", cy: "414.4", r: "29.74" }),
      React.createElement("circle", { cx: "424.56", cy: "238.76", r: "27.53" }),
      React.createElement("circle", { cx: "394.5", cy: "122.1", r: "26.54" }),
      React.createElement("circle", { cx: "350.4", cy: "256.22", r: "22.21" }),
      React.createElement("circle", { cx: "469.83", cy: "311.06", r: "23.38" }),
      React.createElement("circle", { cx: "429.4", cy: "346.33", r: "24.75" }),
      React.createElement("circle", { cx: "402.62", cy: "382.86", r: "15.2" }),
      React.createElement("circle", { cx: "291.9", cy: "427.06", r: "18.68" }),
      React.createElement("circle", { cx: "317.98", cy: "355.37", r: "18.12" }),
      React.createElement("circle", { cx: "422.56", cy: "168.87", r: "21.43" }),
      React.createElement("circle", { cx: "354.05", cy: "193.62", r: "10.15" })),


      React.createElement("polygon", {
        points: "407.81 48.71 396.97 45 386.22 48.96 386.4 37.51 379.31 28.51 390.25 25.14 396.62 15.62 403.21 24.99 414.23 28.1 407.36 37.26 407.81 48.71",
        fill: "#f8c751" })),



      React.createElement("g", { id: "colorTreeGroup" },
      React.createElement("g", { className: "baubles withDrop", fill: "#52b96f" },
      React.createElement("circle", { cx: "324.62", cy: "297.75", r: "13.03" }),
      React.createElement("circle", { cx: "448.79", cy: "198.74", r: "9.55" }),
      React.createElement("circle", { cx: "384.89", cy: "250.95", r: "5.26" }),
      React.createElement("circle", { cx: "380.12", cy: "193.12", r: "5.26" }),
      React.createElement("circle", { cx: "381.53", cy: "280.07", r: "12.53" }),
      React.createElement("circle", { cx: "418.65", cy: "292.85", r: "19.48" }),
      React.createElement("circle", { cx: "488.35", cy: "354.99", r: "17.25" }),
      React.createElement("circle", { cx: "295.61", cy: "386.81", r: "15.25" }),
      React.createElement("circle", { cx: "372.42", cy: "221.34", r: "15" }),
      React.createElement("circle", { cx: "371.28", cy: "165.7", r: "16.78" }),
      React.createElement("circle", { cx: "396.77", cy: "71.89", r: "17.15" }),
      React.createElement("circle", { cx: "463.88", cy: "265.47", r: "14.99" }),
      React.createElement("circle", { cx: "394.06", cy: "437.32", r: "16.47" }),
      React.createElement("circle", { cx: "510.16", cy: "422.33", r: "16.95" }),
      React.createElement("circle", { cx: "267.16", cy: "446.84", r: "6.14" }),
      React.createElement("circle", { cx: "532.1", cy: "445.73", r: "6.88" }),
      React.createElement("circle", { cx: "316.24", cy: "444.75", r: "6.88" }),
      React.createElement("circle", { cx: "347.52", cy: "223.79", r: "6.64" }),
      React.createElement("circle", { cx: "398.01", cy: "207.97", r: "7.86" }),
      React.createElement("circle", { cx: "311.87", cy: "322.56", r: "9.06" }),
      React.createElement("circle", { cx: "458.83", cy: "372.43", r: "10.08" }),
      React.createElement("circle", { cx: "371.28", cy: "379.45", r: "8.85" }),
      React.createElement("circle", { cx: "488.35", cy: "391.98", r: "12.04" }),
      React.createElement("circle", { cx: "487.36", cy: "444.26", r: "9.06" }),
      React.createElement("circle", { cx: "429.26", cy: "136.68", r: "3.98" }),
      React.createElement("circle", { cx: "463.88", cy: "239.29", r: "3.98" }),
      React.createElement("circle", { cx: "510.06", cy: "393.1", r: "3.98" }),
      React.createElement("circle", { cx: "361.88", cy: "447.75", r: "3.69" }),
      React.createElement("circle", { cx: "390.64", cy: "408.38", r: "3.69" })),

      React.createElement("g", { className: "baubles withInset", fill: "#b74452" },
      React.createElement("circle", { cx: "365.99", cy: "329.09", r: "34.65" }),
      React.createElement("circle", { cx: "446.94", cy: "421.02", r: "32.93" }),
      React.createElement("circle", { cx: "344.84", cy: "414.4", r: "29.74" }),
      React.createElement("circle", { cx: "424.56", cy: "238.76", r: "27.53" }),
      React.createElement("circle", { cx: "394.5", cy: "122.1", r: "26.54" }),
      React.createElement("circle", { cx: "350.4", cy: "256.22", r: "22.21" }),
      React.createElement("circle", { cx: "469.83", cy: "311.06", r: "23.38" }),
      React.createElement("circle", { cx: "429.4", cy: "346.33", r: "24.75" }),
      React.createElement("circle", { cx: "402.62", cy: "382.86", r: "15.2" }),
      React.createElement("circle", { cx: "291.9", cy: "427.06", r: "18.68" }),
      React.createElement("circle", { cx: "317.98", cy: "355.37", r: "18.12" }),
      React.createElement("circle", { cx: "422.56", cy: "168.87", r: "21.43" }),
      React.createElement("circle", { cx: "354.05", cy: "193.62", r: "10.15" })),


      React.createElement("polygon", {
        ref: star => {
          this.star = star;
        },
        points: "407.81 48.71 396.97 45 386.22 48.96 386.4 37.51 379.31 28.51 390.25 25.14 396.62 15.62 403.21 24.99 414.23 28.1 407.36 37.26 407.81 48.71",
        fill: "#f8c751",
        stroke: "#f8c751",
        strokeWidth: 2 })),



      React.createElement("g", { id: "flatBaubleGroup" }),
      React.createElement("radialGradient", {
        id: "baubleShineGrad",
        cx: "352.79",
        cy: "293.87",
        r: "26",
        gradientUnits: "userSpaceOnUse" },

      React.createElement("stop", { offset: "0.01", stopColor: "#fff", stopOpacity: "0.5" }),
      React.createElement("stop", { offset: "0.69", stopColor: "#fff", stopOpacity: "0" })),

      React.createElement("radialGradient", {
        id: "baubleGrad",
        cx: 358,
        cy: 298,
        r: 26,
        gradientUnits: "userSpaceOnUse" },

      React.createElement("stop", { offset: "0.5", stopColor: "#FABE2B", stopOpacity: 0 }),
      React.createElement("stop", {
        offset: "0.8",
        className: "baubleGradStopColor",
        stopColor: "#491615",
        stopOpacity: "0.15" }),

      React.createElement("stop", {
        offset: 1,
        className: "baubleGradStopColor",
        stopColor: "#491615",
        stopOpacity: "0.65" })),




      React.createElement("filter", { id: "insetShadow" },

      React.createElement("feOffset", {
        dx: "0",
        dy: "14" }),


      React.createElement("feGaussianBlur", {
        stdDeviation: "5",
        result: "offset-blur" }),


      React.createElement("feComposite", {
        operator: "out",
        in: "SourceGraphic",
        in2: "offset-blur",
        result: "inverse" }),



      React.createElement("feFlood", {
        floodColor: "black",
        floodOpacity: "0.5",
        result: "color" }),


      React.createElement("feComposite", {
        operator: "in",
        in: "color",
        in2: "inverse",
        result: "shadow" }),


      React.createElement("feComposite", {
        operator: "over",
        in: "shadow",
        in2: "SourceGraphic" })),




      React.createElement("filter", {
        id: "dropShadow",
        width: "350%",
        height: "350%",
        colorInterpolationFilters: "sRGB" },

      React.createElement("feGaussianBlur", { stdDeviation: "4", result: "coloredBlur" }),
      React.createElement("feOffset", { dx: "0", dy: "3", result: "offsetblur" }),
      React.createElement("feFlood", { id: "dropShadowAlpha", floodColor: "#000", floodOpacity: "0.4" }),
      React.createElement("feComposite", { in2: "offsetblur", operator: "in" }),
      React.createElement("feMerge", null,
      React.createElement("feMergeNode", null),
      React.createElement("feMergeNode", { in: "SourceGraphic" }))),



      React.createElement("rect", {
        width: "158",
        height: "74",
        x: "321",
        y: "263",
        rx: "37",
        ry: "37",
        fill: "#000",
        opacity: "1" }),



      React.createElement("linearGradient", {
        id: "baubleCapGrad",
        x1: "351.26",
        y1: "272.94",
        x2: "364.74",
        y2: "272.94",
        gradientUnits: "userSpaceOnUse" },

      React.createElement("stop", { offset: "0.09", stopColor: "#f5bb3b" }),
      React.createElement("stop", { offset: "0.31", stopColor: "#fff" }),
      React.createElement("stop", { offset: "0.51", stopColor: "#f5bb3b" }),
      React.createElement("stop", { offset: "0.86", stopColor: "#bd902d" }),
      React.createElement("stop", { offset: "1", stopColor: "#f5bb3b" })),


      React.createElement("pattern", {
        id: "starPattern",
        ref: starPattern => {
          this.starPattern = starPattern;
        },
        width: 92,
        height: 92,
        patternTransform: "translate(-10.02 -3.42) scale(0.33)",
        patternUnits: "userSpaceOnUse",
        viewBox: "0 0 92 92",
        x: 0,
        y: 0 },

      React.createElement("rect", { width: 184, height: 184, fill: "none" }),
      React.createElement("g", {
        ref: patternColor => {
          this.patternColor = patternColor;
        },
        fill: "#BC4B51" },

      React.createElement("polygon", { points: "84.19 73.59 95.3 83.17 109.49 79.45 103.83 92.99 111.76 105.34 97.14 104.12 87.87 115.48 84.5 101.19 70.83 95.86 83.36 88.25 84.19 73.59" }),
      React.createElement("polygon", { points: "45.58 87.84 48.09 90 51.3 89.16 50.02 92.22 51.81 95.02 48.51 94.74 46.41 97.31 45.65 94.08 42.55 92.87 45.39 91.15 45.58 87.84" }),
      React.createElement("polygon", { points: "-7.82 73.59 3.3 83.17 17.49 79.45 11.82 92.99 19.76 105.34 5.14 104.12 -4.13 115.48 -7.5 101.19 -21.18 95.86 -8.64 88.25 -7.82 73.59" }),
      React.createElement("polygon", { points: "39.53 27.59 50.65 37.17 64.83 33.45 59.17 46.99 67.11 59.34 52.49 58.12 43.21 69.48 39.84 55.19 26.17 49.86 38.7 42.25 39.53 27.59" }),
      React.createElement("polygon", { points: "84.19 -18.41 95.3 -8.82 109.49 -12.55 103.83 0.99 111.76 13.34 97.14 12.12 87.87 23.48 84.5 9.19 70.83 3.86 83.36 -3.75 84.19 -18.41" }),
      React.createElement("polygon", { points: "90.23 41.84 92.75 44 95.95 43.16 94.67 46.22 96.47 49.02 93.16 48.74 91.06 51.31 90.3 48.08 87.21 46.87 90.05 45.15 90.23 41.84" }),
      React.createElement("polygon", { points: "45.58 -4.16 48.09 -2 51.3 -2.84 50.02 0.22 51.81 3.02 48.51 2.74 46.41 5.31 45.65 2.08 42.55 0.87 45.39 -0.85 45.58 -4.16" }),

      React.createElement("polygon", { points: "-7.82 -18.41 3.3 -8.82 17.49 -12.55 11.82 0.99 19.76 13.34 5.14 12.12 -4.13 23.48 -7.5 9.19 -21.18 3.86 -8.64 -3.75 -7.82 -18.41" }),
      React.createElement("polygon", { points: "-1.77 41.84 0.75 44 3.96 43.16 2.67 46.22 4.47 49.02 1.16 48.74 -0.94 51.31 -1.7 48.08 -4.79 46.87 -1.96 45.15 -1.77 41.84" }))),


      React.createElement("filter", {
        id: "baubleShadow",
        width: "350%",
        height: "350%",
        colorInterpolationFilters: "sRGB" },

      React.createElement("feGaussianBlur", { stdDeviation: "4", result: "coloredBlur" }),
      React.createElement("feOffset", { dx: "0", dy: "23", result: "offsetblur" }),
      React.createElement("feFlood", { id: "dropShadowAlpha", floodColor: "#000", floodOpacity: "0.21" }),
      React.createElement("feComposite", { in2: "offsetblur", operator: "in" }),
      React.createElement("feMerge", null,
      React.createElement("feMergeNode", null)))),





      React.createElement("g", {
        ref: wholeToggle => {
          this.wholeToggle = wholeToggle;
        } },

      React.createElement("rect", { filter: "url(#insetShadow)",
        ref: toggleBg => {
          this.toggleBg = toggleBg;
        },
        x: "321",
        y: "263",
        width: "158",
        height: "74",
        rx: "37",
        ry: "37",
        fill: "#B74452" }),


      React.createElement("rect", {
        filter: "url(#baubleShadow)",
        ref: dotGroup => {
          this.dotGroup = dotGroup;
        },
        width: "52",
        height: "52",
        x: "332",
        y: "274",
        rx: "26",
        ry: "26",
        fill: "#000",
        opacity: "1" }),

      React.createElement("g", null,
      React.createElement("g", {
        ref: dotLBg => {
          this.dotLBg = dotLBg;
        } },

      React.createElement("path", {
        d: "M355.68,270.7a3,3,0,0,1-.65-1.86,3,3,0,0,1,5.94,0,3,3,0,0,1-.65,1.86",
        fill: "none",
        stroke: "#DCA014",
        "stroke-miterlimit": "10",
        strokeWidth: "1.5" }),

      React.createElement("path", {
        d: "M363.88,270.29H352.13a.87.87,0,0,0-.87.86v3.52a.87.87,0,0,0,1.73,0l10,.06h0a.87.87,0,0,0,1.73,0v-3.59A.87.87,0,0,0,363.88,270.29Z",
        fill: "url(#baubleCapGrad)" }),

      React.createElement("circle", { cx: "358", cy: "300", r: "26", fill: "#FFFCF9" }),

      React.createElement("circle", { cx: "358", cy: "300", r: "26", fill: "url(#starPattern)" }),
      React.createElement("circle", { cx: "358", cy: "300", r: "26.1", fill: "url(#baubleGrad)" }),
      React.createElement("circle", {
        cx: "358",
        cy: "300",
        r: "26",
        fill: "url(#baubleShineGrad)"
        /*       ref={dotGrad => {
                                      this.dotGrad = dotGrad;
                                      }} */ }))),



      React.createElement("rect", {
        onClick: this.toggle,
        ref: hit => {
          this.hit = hit;
        },
        className: "hit",
        x: "321",
        y: "263",
        width: "158",
        height: "74",
        rx: "37",
        ry: "37",
        fill: "transparent" })),


      React.createElement("use", { xlinkHref: "#colorTreeGroup" })));



  }}


ReactDOM.render(React.createElement(CleanToggle, null), document.querySelector("#app"));