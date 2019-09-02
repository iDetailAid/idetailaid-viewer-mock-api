window.uk = window.uk || {};
window.uk.co = window.uk.co || {};
window.uk.co.idetailaid = window.uk.co.idetailaid || {};

window.uk.co.idetailaid.Viewer = window.uk.co.idetailaid.Viewer || {
api: {
buildMockAPI: (...args) => { 
  console.debug('Viewer.api.buildMockAPI called with:', args);
},
setArrows: (...args) => { 
  console.debug('Viewer.api.setArrows called with:', args);
},
getArrows: (...args) => { 
  const data=[
  [
    [
      {
        "left": false,
        "right": false
      }
    ],
    [
      {
        "right": false
      }
    ],
    [],
    [
      {
        "up": false
      }
    ]
  ],
  [
    [
      {
        "up": false
      }
    ]
  ]
]; 
  console.debug('Viewer.api.getArrows called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
setSwipe: (...args) => { 
  console.debug('Viewer.api.setSwipe called with:', args);
},
getSwipe: (...args) => { 
  const data=[
  [
    [
      {
        "left": false,
        "right": false
      }
    ],
    [
      {
        "right": false
      }
    ],
    [],
    [
      {
        "up": false
      }
    ]
  ],
  [
    [
      {
        "up": false
      }
    ]
  ]
]; 
  console.debug('Viewer.api.getSwipe called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
render: (...args) => { 
  console.debug('Viewer.api.render called with:', args);
},
goToSlide: (...args) => { 
  console.debug('Viewer.api.goToSlide called with:', args);
},
goTo: (...args) => { 
  console.debug('Viewer.api.goTo called with:', args);
},
goBack: (...args) => { 
  console.debug('Viewer.api.goBack called with:', args);
},
goUp: (...args) => { 
  console.debug('Viewer.api.goUp called with:', args);
},
goDown: (...args) => { 
  console.debug('Viewer.api.goDown called with:', args);
},
goLeft: (...args) => { 
  console.debug('Viewer.api.goLeft called with:', args);
},
goRight: (...args) => { 
  console.debug('Viewer.api.goRight called with:', args);
},
openOverlay: (...args) => { 
  console.debug('Viewer.api.openOverlay called with:', args);
},
closeOverlay: (...args) => { 
  console.debug('Viewer.api.closeOverlay called with:', args);
},
openReference: (...args) => { 
  console.debug('Viewer.api.openReference called with:', args);
},
openAsset: (...args) => { 
  console.debug('Viewer.api.openAsset called with:', args);
},
openUrl: (...args) => { 
  console.debug('Viewer.api.openUrl called with:', args);
},
showVirtualSlide: (...args) => { 
  console.debug('Viewer.api.showVirtualSlide called with:', args);
},
hideVirtualSlide: (...args) => { 
  console.debug('Viewer.api.hideVirtualSlide called with:', args);
},
getCurrentPresentation: (...args) => { 
  const data={
  "country_code": "go",
  "hidden": 0,
  "id": 201,
  "meta": {},
  "title": "Mock Presentation"
}; 
  console.debug('Viewer.api.getCurrentPresentation called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
getCurrentPresentationManifest: (...args) => { 
  const data={
  "id": "default",
  "title": "Mock Presentation (Diabotan / Global)",
  "presentation": {
    "title": "Mock Presentation",
    "hidden": 0,
    "meta": {},
    "id": 201,
    "country_code": "go"
  },
  "product": {
    "id": 1,
    "name": "Diabotan"
  },
  "company": {
    "id": 1,
    "name": "PharmaCo"
  },
  "css": [],
  "js": [],
  "templates": {
    "1336": {
      "id": 1336,
      "title": "Mock Core Flow Template",
      "file": "07feb1219520756f8f3236668cec01de.html",
      "reference_ids": [],
      "navigation_ids": []
    },
    "1347": {
      "id": 1347,
      "title": "Mock Sub Flow Template",
      "file": "79b16d11f43874b15da438b3a136e911.html",
      "reference_ids": [],
      "navigation_ids": []
    }
  },
  "references": [],
  "navigation": [],
  "matrix": [
    [
      {
        "title": "Mock Slide One",
        "file": "9560d5eeaaabed937b0a35e6fe4cc148.html",
        "image": "9560d5eeaaabed937b0a35e6fe4cc148.png",
        "mandatory": 0,
        "reference_ids": [],
        "meta": {},
        "template_id": null,
        "overlays": [],
        "category": null,
        "id": 1348
      }
    ],
    [
      {
        "title": "Mock Slide Two",
        "file": "bfc25cc9623a1790d0f49fe79adbddd0.html",
        "image": "bfc25cc9623a1790d0f49fe79adbddd0.png",
        "mandatory": 0,
        "reference_ids": [],
        "meta": {},
        "template_id": null,
        "overlays": [],
        "category": null,
        "id": 1349
      },
      {
        "title": "Mock Slide Four",
        "file": "373becea7a7512d50ab5f2e26c5900cd.html",
        "image": "373becea7a7512d50ab5f2e26c5900cd.png",
        "mandatory": 0,
        "reference_ids": [],
        "meta": {},
        "template_id": 1336,
        "overlays": [
          {
            "id": "53d362eb-3b40-46ad-94bf-0cb943294a70",
            "title": "Overlay 1",
            "style": "diabotan-overlay-large",
            "image": "373becea7a7512d50ab5f2e26c5900cd_overlay_53d362eb-3b40-46ad-94bf-0cb943294a70_large.png",
            "image_url": "http://192.168.10.100/assets/pharmaco/diabotan/go/373becea7a7512d50ab5f2e26c5900cd_overlay_53d362eb-3b40-46ad-94bf-0cb943294a70_large.png",
            "in_use": true
          }
        ],
        "category": null,
        "id": 1344
      }
    ],
    [
      {
        "title": "Mock Slide Three",
        "file": "65733e4f037dfc13b0f840246fa79c33.html",
        "image": "65733e4f037dfc13b0f840246fa79c33.png",
        "mandatory": 0,
        "reference_ids": [],
        "meta": {},
        "template_id": 1347,
        "overlays": [
          {
            "id": "fd63d504-d032-420e-eb59-f3eaa8e773f8",
            "title": "Overlay 1",
            "style": "diabotan-overlay-large",
            "image": "65733e4f037dfc13b0f840246fa79c33_overlay_fd63d504-d032-420e-eb59-f3eaa8e773f8_large.png",
            "image_url": "http://192.168.10.100/assets/pharmaco/diabotan/go/65733e4f037dfc13b0f840246fa79c33_overlay_fd63d504-d032-420e-eb59-f3eaa8e773f8_large.png",
            "in_use": true
          },
          {
            "id": "0d299d66-0591-41fa-9df3-4997c539c2f1",
            "title": "Overlay 2",
            "style": "diabotan-overlay-large",
            "image": "65733e4f037dfc13b0f840246fa79c33_overlay_0d299d66-0591-41fa-9df3-4997c539c2f1_large.png",
            "image_url": "http://192.168.10.100/assets/pharmaco/diabotan/go/65733e4f037dfc13b0f840246fa79c33_overlay_0d299d66-0591-41fa-9df3-4997c539c2f1_large.png",
            "in_use": false
          }
        ],
        "category": "this",
        "id": 1346
      }
    ]
  ],
  "timeStamp": 1567462155648,
  "settings": {}
}; 
  console.debug('Viewer.api.getCurrentPresentationManifest called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
getCurrentPresentationSlides: (...args) => { 
  const data=[
  {
    "title": "Mock Slide One",
    "file": "9560d5eeaaabed937b0a35e6fe4cc148.html",
    "image": "9560d5eeaaabed937b0a35e6fe4cc148.png",
    "mandatory": 0,
    "reference_ids": [],
    "meta": {},
    "template_id": null,
    "overlays": [],
    "category": null,
    "id": 1348,
    "viewStart": 1567445526350
  },
  {
    "title": "Mock Slide Two",
    "file": "bfc25cc9623a1790d0f49fe79adbddd0.html",
    "image": "bfc25cc9623a1790d0f49fe79adbddd0.png",
    "mandatory": 0,
    "reference_ids": [],
    "meta": {},
    "template_id": null,
    "overlays": [],
    "category": null,
    "id": 1349
  },
  {
    "title": "Mock Slide Four",
    "file": "373becea7a7512d50ab5f2e26c5900cd.html",
    "image": "373becea7a7512d50ab5f2e26c5900cd.png",
    "mandatory": 0,
    "reference_ids": [],
    "meta": {},
    "template_id": 1336,
    "overlays": [
      {
        "id": "53d362eb-3b40-46ad-94bf-0cb943294a70",
        "title": "Overlay 1",
        "style": "diabotan-overlay-large",
        "image": "373becea7a7512d50ab5f2e26c5900cd_overlay_53d362eb-3b40-46ad-94bf-0cb943294a70_large.png",
        "image_url": "http://192.168.10.100/assets/pharmaco/diabotan/go/373becea7a7512d50ab5f2e26c5900cd_overlay_53d362eb-3b40-46ad-94bf-0cb943294a70_large.png",
        "in_use": false
      }
    ],
    "category": null,
    "id": 1344
  },
  {
    "title": "Mock Slide Three",
    "file": "65733e4f037dfc13b0f840246fa79c33.html",
    "image": "65733e4f037dfc13b0f840246fa79c33.png",
    "mandatory": 0,
    "reference_ids": [],
    "meta": {},
    "template_id": 1347,
    "overlays": [
      {
        "id": "fd63d504-d032-420e-eb59-f3eaa8e773f8",
        "title": "Overlay 1",
        "style": "diabotan-overlay-large",
        "image": "65733e4f037dfc13b0f840246fa79c33_overlay_fd63d504-d032-420e-eb59-f3eaa8e773f8_large.png",
        "image_url": "http://192.168.10.100/assets/pharmaco/diabotan/go/65733e4f037dfc13b0f840246fa79c33_overlay_fd63d504-d032-420e-eb59-f3eaa8e773f8_large.png",
        "in_use": true
      },
      {
        "id": "0d299d66-0591-41fa-9df3-4997c539c2f1",
        "title": "Overlay 2",
        "style": "diabotan-overlay-large",
        "image": "65733e4f037dfc13b0f840246fa79c33_overlay_0d299d66-0591-41fa-9df3-4997c539c2f1_large.png",
        "image_url": "http://192.168.10.100/assets/pharmaco/diabotan/go/65733e4f037dfc13b0f840246fa79c33_overlay_0d299d66-0591-41fa-9df3-4997c539c2f1_large.png",
        "in_use": false
      }
    ],
    "category": "this",
    "id": 1346
  }
]; 
  console.debug('Viewer.api.getCurrentPresentationSlides called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
getCurrentPresentationCoreFlowSlides: (...args) => { 
  const data=[
  {
    "title": "Mock Slide One",
    "file": "9560d5eeaaabed937b0a35e6fe4cc148.html",
    "image": "9560d5eeaaabed937b0a35e6fe4cc148.png",
    "mandatory": 0,
    "reference_ids": [],
    "meta": {},
    "template_id": null,
    "overlays": [],
    "category": null,
    "id": 1348,
    "viewStart": 1567445526350
  },
  {
    "title": "Mock Slide Two",
    "file": "bfc25cc9623a1790d0f49fe79adbddd0.html",
    "image": "bfc25cc9623a1790d0f49fe79adbddd0.png",
    "mandatory": 0,
    "reference_ids": [],
    "meta": {},
    "template_id": null,
    "overlays": [],
    "category": null,
    "id": 1349
  },
  {
    "title": "Mock Slide Three",
    "file": "65733e4f037dfc13b0f840246fa79c33.html",
    "image": "65733e4f037dfc13b0f840246fa79c33.png",
    "mandatory": 0,
    "reference_ids": [],
    "meta": {},
    "template_id": 1347,
    "overlays": [
      {
        "id": "fd63d504-d032-420e-eb59-f3eaa8e773f8",
        "title": "Overlay 1",
        "style": "diabotan-overlay-large",
        "image": "65733e4f037dfc13b0f840246fa79c33_overlay_fd63d504-d032-420e-eb59-f3eaa8e773f8_large.png",
        "image_url": "http://192.168.10.100/assets/pharmaco/diabotan/go/65733e4f037dfc13b0f840246fa79c33_overlay_fd63d504-d032-420e-eb59-f3eaa8e773f8_large.png",
        "in_use": true
      },
      {
        "id": "0d299d66-0591-41fa-9df3-4997c539c2f1",
        "title": "Overlay 2",
        "style": "diabotan-overlay-large",
        "image": "65733e4f037dfc13b0f840246fa79c33_overlay_0d299d66-0591-41fa-9df3-4997c539c2f1_large.png",
        "image_url": "http://192.168.10.100/assets/pharmaco/diabotan/go/65733e4f037dfc13b0f840246fa79c33_overlay_0d299d66-0591-41fa-9df3-4997c539c2f1_large.png",
        "in_use": false
      }
    ],
    "category": "this",
    "id": 1346
  }
]; 
  console.debug('Viewer.api.getCurrentPresentationCoreFlowSlides called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},
getCurrentSlideDetails: (...args) => { 
  const data={
  "slide": {
    "title": "Mock Slide One",
    "file": "9560d5eeaaabed937b0a35e6fe4cc148.html",
    "image": "9560d5eeaaabed937b0a35e6fe4cc148.png",
    "mandatory": 0,
    "reference_ids": [],
    "meta": {},
    "template_id": null,
    "overlays": [],
    "category": null,
    "id": 1348
  },
  "x": 0,
  "y": 0,
  "element": {}
}; 
  console.debug('Viewer.api.getCurrentSlideDetails called with :', args); 
  return new Promise( (resolve, reject) => { 
    callback = args.pop();
    if (typeof callback === 'function') {
      callback(data); 
    } 
    resolve(data); 
  })
},

}
}

if (window.Viewer && (window.Viewer != window.uk.co.idetailaid.Viewer)) {
  console.warn('Global var `Viewer` has already been defined, use `uk.co.idetailaid.Viewer` or `ida.Viewer` to target the iDetailAid Viewer');
} else if (!window.Viewer) {
  window.Viewer = window.uk.co.idetailaid.Viewer;
}

if (window.ida && (window.ida != window.uk.co.idetailaid)) {
  console.warn('Global var `ida` has already been defined, use `uk.co.idetailaid` to target the iDetailAid namespace');
} else if (!window.Viewer) {
  window.ida = window.uk.co.idetailaid;
}
