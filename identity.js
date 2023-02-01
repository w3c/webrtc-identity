var respecConfig = {
  // specification status (e.g. WD, LCWD, NOTE, etc.). If in doubt use ED.
  specStatus:           "ED",
  xref: ["html", "webidl", "webrtc", "file-api", "mediacapture-streams", "hr-time", "dom"],
  // the specification's short name, as in http://www.w3.org/TR/short-name/
  shortName:            "webrtc-identity",
  useExperimentalStyles: true,

  // if your specification has a subtitle that goes below the main
  // formal title, define it here
  // subtitle   :  "an excellent document",

  // if you wish the publication date to be other than today, set this
  // Date of last non-editorial change https://github.com/w3c/webrtc-identity/pull/30
  publishDate:  "2019-12-06",


  // if the specification's copyright date is a range of years, specify
  // the start date here:
  // copyrightStart: "2005",

  // if there a publicly available Editor's Draft, this is the link
  edDraftURI: "https://w3c.github.io/webrtc-identity/",

  // if this is a LCWD, uncomment and set the end of its review period
  // lcEnd: "2009-08-05",

  // if you want to have extra CSS, append them to this list
  // it is RECOMMENDED that the respec.css stylesheet be kept
  //        extraCSS:             ["ReSpec.js/css/respec.css"],
  //        extraCSS:             ["../../../2009/dap/ReSpec.js/css/respec.css"],

  // editors, add as many as you like
  // only "name" is REQUIRED
  editors:  [
    //              { name: "Your Name", url: "http://example.org/",
    //                company: "Your Company", companyURL: "http://example.com/" },
    { name: "Cullen Jennings", company: "Cisco",
      w3cid: "25254"
    },
    {
        name: "Martin Thomson",
        company: "Mozilla",
        w3cid: 68503
    },
  ],

  // authors, add as many as you like.
  // This is optional, uncomment if you have authors as well as editors.
  // only "name" is REQUIRED. Same format as editors.

  //authors:  [
  //    { name: "Your Name", url: "http://example.org/",
  //      company: "Your Company", companyURL: "http://example.com/" }
  //],

  group:           "webrtc",

  // name (without the @w3c.org) of the public mailing to which comments are due
  wgPublicList: "public-webrtc",

  github: "https://github.com/w3c/webrtc-identity/",
  testSuiteURI: "https://github.com/web-platform-tests/wpt/tree/master/webrtc-identity",
  localBiblio:  {
    "JSEP": {
      "aliasOf": "RFC8829"
    }
  }
};
