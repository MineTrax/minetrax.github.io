---
sidebar_position: 110
title: Hero Particle Effects
id: hero-particle-effects
---

This page contains some sample particle effect options for hero section. You can use these options in `Site Settings` > `Hero Section` > `Particle Effect Options` field.

Paste one of the JSON options in `Particle Effect Options` field and click `Save` button.

### Among Us Effect

```json
{
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#000000"
    },
    "image": "",
    "position": "",
    "repeat": "",
    "size": "",
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "clear": true,
  "defaultThemes": {},
  "delay": 0,
  "fullScreen": {
    "enable": true,
    "zIndex": 0
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": false,
        "mode": []
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": [],
        "type": "circle"
      },
      "onHover": {
        "enable": false,
        "mode": [],
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": {
        "delay": 0.5,
        "enable": true
      }
    },
    "modes": {
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 200,
        "duration": 0.4,
        "mix": false
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 100,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad"
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "manualParticles": [],
  "particles": {
    "bounce": {
      "horizontal": {
        "value": 1
      },
      "vertical": {
        "value": 1
      }
    },
    "collisions": {
      "absorb": {
        "speed": 2
      },
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "enable": false,
      "maxSpeed": 50,
      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#fff",
      "animation": {
        "h": {
          "count": 0,
          "enable": false,
          "speed": 20,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "s": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "l": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        }
      }
    },
    "effect": {
      "close": true,
      "fill": true,
      "options": {},
      "type": []
    },
    "groups": {
      "z5000": {
        "number": {
          "value": 70
        },
        "zIndex": {
          "value": 50
        }
      },
      "z7500": {
        "number": {
          "value": 30
        },
        "zIndex": {
          "value": 75
        }
      },
      "z2500": {
        "number": {
          "value": 50
        },
        "zIndex": {
          "value": 25
        }
      },
      "z1000": {
        "number": {
          "value": 40
        },
        "zIndex": {
          "value": 10
        }
      }
    },
    "move": {
      "angle": {
        "offset": 0,
        "value": 10
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "direction": "right",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": true,
        "delay": {
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": false,
      "size": false,
      "speed": 5,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {}
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": false,
        "width": 1920,
        "height": 1080
      },
      "limit": {
        "mode": "delete",
        "value": 0
      },
      "value": 200
    },
    "opacity": {
      "value": 1,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 2,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "reduceDuplicates": false,
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "close": true,
      "fill": true,
      "options": {},
      "type": "circle"
    },
    "size": {
      "value": 3,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 5,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "stroke": {
      "width": 0
    },
    "zIndex": {
      "value": 5,
      "opacityRate": 0.5,
      "sizeRate": 1,
      "velocityRate": 1
    },
    "destroy": {
      "bounds": {},
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "value": 3
        },
        "rate": {
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true,
        "particles": {}
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "value": 0,
        "sync": false
      },
      "duration": {
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#fff"
      },
      "consent": false,
      "distance": 100,
      "enable": false,
      "frequency": 1,
      "opacity": 1,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "smooth": false,
  "style": {},
  "themes": [],
  "zLayers": 100,
  "name": "Among Us",
  "emitters": {
    "autoPlay": true,
    "fill": true,
    "life": {
      "wait": false
    },
    "rate": {
      "quantity": 1,
      "delay": 7
    },
    "shape": {
      "options": {},
      "replace": {
        "color": false,
        "opacity": false
      },
      "type": "square"
    },
    "startCount": 0,
    "size": {
      "mode": "percent",
      "height": 0,
      "width": 0
    },
    "particles": {
      "shape": {
        "type": "images",
        "options": {
          "images": {
            "src": "https://particles.js.org/images/cyan_amongus.png",
            "width": 500,
            "height": 634
          }
        }
      },
      "size": {
        "value": 40
      },
      "move": {
        "speed": 10,
        "outModes": {
          "default": "none",
          "right": "destroy"
        },
        "straight": true
      },
      "zIndex": {
        "value": 0
      },
      "rotate": {
        "value": {
          "min": 0,
          "max": 360
        },
        "animation": {
          "enable": true,
          "speed": 10,
          "sync": true
        }
      }
    },
    "position": {
      "x": -5,
      "y": 55
    }
  },
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
}
```


### Confetti Effect

```json
{
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#000000"
    },
    "image": "",
    "position": "",
    "repeat": "",
    "size": "",
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "clear": true,
  "defaultThemes": {},
  "delay": 0,
  "fullScreen": {
    "enable": true,
    "zIndex": 0
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": false,
        "mode": []
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": [],
        "type": "circle"
      },
      "onHover": {
        "enable": false,
        "mode": [],
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": {
        "delay": 0.5,
        "enable": true
      }
    },
    "modes": {
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 200,
        "duration": 0.4,
        "mix": false
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 100,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad"
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "manualParticles": [],
  "particles": {
    "bounce": {
      "horizontal": {
        "value": 0
      },
      "vertical": {
        "value": 0
      }
    },
    "collisions": {
      "absorb": {
        "speed": 2
      },
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "enable": false,
      "maxSpeed": 50,
      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": [
        "#1E00FF",
        "#FF0061",
        "#E1FF00",
        "#00FF9E"
      ],
      "animation": {
        "h": {
          "count": 0,
          "enable": true,
          "speed": 30,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "s": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "l": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        }
      }
    },
    "effect": {
      "close": true,
      "fill": true,
      "options": {},
      "type": []
    },
    "groups": {},
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
        "radius": 0
      },
      "decay": {
        "min": 0.05,
        "max": 0.15
      },
      "distance": {},
      "direction": "top",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": true,
        "inverse": false,
        "maxSpeed": 200
      },
      "path": {
        "clamp": true,
        "delay": {
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "destroy",
        "bottom": "destroy",
        "left": "destroy",
        "right": "destroy",
        "top": "none"
      },
      "random": false,
      "size": false,
      "speed": {
        "min": 50,
        "max": 150
      },
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {}
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": false,
        "width": 1920,
        "height": 1080
      },
      "limit": {
        "mode": "delete",
        "value": 300
      },
      "value": 0
    },
    "opacity": {
      "value": 1,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 0.3,
        "decay": 0,
        "delay": 0,
        "sync": true,
        "mode": "auto",
        "startValue": "max",
        "destroy": "min"
      }
    },
    "reduceDuplicates": false,
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "close": true,
      "fill": true,
      "options": {
        "polygon": [
          {
            "sides": 5
          },
          {
            "sides": 6
          }
        ]
      },
      "type": [
        "circle",
        "square",
        "polygon"
      ]
    },
    "size": {
      "value": 3,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 5,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "stroke": {
      "width": 0
    },
    "zIndex": {
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    },
    "destroy": {
      "bounds": {},
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "value": 3
        },
        "rate": {
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true,
        "particles": {}
      }
    },
    "roll": {
      "darken": {
        "enable": true,
        "value": 30
      },
      "enable": true,
      "enlighten": {
        "enable": true,
        "value": 30
      },
      "mode": "both",
      "speed": {
        "min": 15,
        "max": 25
      }
    },
    "tilt": {
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 60,
        "decay": 0,
        "sync": false
      },
      "direction": "random",
      "enable": true
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 30,
      "enable": true,
      "speed": {
        "angle": {
          "min": -15,
          "max": 15
        },
        "move": 10
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "value": 0,
        "sync": false
      },
      "duration": {
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 60,
        "decay": 0,
        "sync": false
      },
      "direction": "random",
      "path": false
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#fff"
      },
      "consent": false,
      "distance": 100,
      "enable": false,
      "frequency": 1,
      "opacity": 1,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "smooth": false,
  "style": {},
  "themes": [],
  "zLayers": 100,
  "name": "Wobble",
  "emitters": {
    "autoPlay": true,
    "fill": true,
    "life": {
      "wait": false
    },
    "rate": {
      "quantity": 10,
      "delay": 0.05
    },
    "shape": {
      "options": {},
      "replace": {
        "color": false,
        "opacity": false
      },
      "type": "square"
    },
    "startCount": 0,
    "size": {
      "mode": "percent",
      "height": 0,
      "width": 0
    },
    "particles": {},
    "position": {
      "x": 50,
      "y": 100
    }
  },
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
}
```

### Stars Effect

```json
{
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#043564"
    },
    "image": "url('https://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
    "position": "0 50%",
    "repeat": "no-repeat",
    "size": "60%",
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "clear": true,
  "defaultThemes": {},
  "delay": 0,
  "fullScreen": {
    "enable": true,
    "zIndex": 0
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "repulse"
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": [],
        "type": "circle"
      },
      "onHover": {
        "enable": false,
        "mode": [],
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": {
        "delay": 0.5,
        "enable": true
      }
    },
    "modes": {
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 200,
        "duration": 0.4,
        "mix": false,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 100,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "manualParticles": [],
  "particles": {
    "bounce": {
      "horizontal": {
        "value": 1
      },
      "vertical": {
        "value": 1
      }
    },
    "collisions": {
      "absorb": {
        "speed": 2
      },
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "enable": false,
      "maxSpeed": 50,
      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#ffffff",
      "animation": {
        "h": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "s": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "l": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        }
      }
    },
    "effect": {
      "close": true,
      "fill": true,
      "options": {},
      "type": []
    },
    "groups": {},
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "direction": "left",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": true,
        "delay": {
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": false,
      "size": false,
      "speed": 6,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": true,
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {}
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": false,
        "width": 1920,
        "height": 1080
      },
      "limit": {
        "mode": "delete",
        "value": 0
      },
      "value": 100
    },
    "opacity": {
      "value": 0.5,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 2,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "reduceDuplicates": false,
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "close": true,
      "fill": true,
      "options": {
        "star": {
          "sides": 5
        }
      },
      "type": "star"
    },
    "size": {
      "value": {
        "min": 1,
        "max": 4
      },
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 5,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "stroke": {
      "width": 0
    },
    "zIndex": {
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    },
    "destroy": {
      "bounds": {},
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "value": 3
        },
        "rate": {
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true,
        "particles": {}
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "value": 0,
        "sync": false
      },
      "duration": {
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#fff"
      },
      "consent": false,
      "distance": 100,
      "enable": false,
      "frequency": 1,
      "opacity": 1,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "smooth": false,
  "style": {},
  "themes": [],
  "zLayers": 100,
  "name": "Nyan Cat 2",
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
}
```


### Parallax Effect

```json
{
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#0d47a1"
    },
    "image": "",
    "position": "",
    "repeat": "",
    "size": "",
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "clear": true,
  "defaultThemes": {},
  "delay": 0,
  "fullScreen": {
    "enable": true,
    "zIndex": 0
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": [],
        "type": "circle"
      },
      "onHover": {
        "enable": true,
        "mode": "grab",
        "parallax": {
          "enable": true,
          "force": 60,
          "smooth": 10
        }
      },
      "resize": {
        "delay": 0.5,
        "enable": true
      }
    },
    "modes": {
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "mix": false,
        "opacity": 0.8,
        "size": 40,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "manualParticles": [],
  "particles": {
    "bounce": {
      "horizontal": {
        "value": 1
      },
      "vertical": {
        "value": 1
      }
    },
    "collisions": {
      "absorb": {
        "speed": 2
      },
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "enable": false,
      "maxSpeed": 50,
      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#ffffff",
      "animation": {
        "h": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "s": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "l": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        }
      }
    },
    "effect": {
      "close": true,
      "fill": true,
      "options": {},
      "type": []
    },
    "groups": {},
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "direction": "none",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": true,
        "delay": {
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": false,
      "size": false,
      "speed": 2,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {}
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": true,
        "width": 1920,
        "height": 1080
      },
      "limit": {
        "mode": "delete",
        "value": 0
      },
      "value": 100
    },
    "opacity": {
      "value": {
        "min": 0.1,
        "max": 0.5
      },
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 3,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "reduceDuplicates": false,
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "close": true,
      "fill": true,
      "options": {},
      "type": "circle"
    },
    "size": {
      "value": {
        "min": 1,
        "max": 10
      },
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 20,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "stroke": {
      "width": 0
    },
    "zIndex": {
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    },
    "destroy": {
      "bounds": {},
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "value": 3
        },
        "rate": {
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true,
        "particles": {}
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "value": 0,
        "sync": false
      },
      "duration": {
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#ffffff"
      },
      "consent": false,
      "distance": 150,
      "enable": true,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "smooth": false,
  "style": {},
  "themes": [],
  "zLayers": 100,
  "name": "Parallax",
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
}
```


### Default Effect

```json
{
  "autoPlay": true,
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "defaultThemes": {},
  "delay": 0,
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "repulse"
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": [],
        "type": "circle"
      },
      "onHover": {
        "enable": true,
        "mode": "bubble",
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": {
        "delay": 0.5,
        "enable": true
      }
    },
    "modes": {
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 250,
        "duration": 2,
        "mix": false,
        "opacity": 0,
        "size": 0,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "manualParticles": [],
  "particles": {
    "bounce": {
      "horizontal": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      },
      "vertical": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      }
    },
    "collisions": {
      "absorb": {
        "speed": 2
      },
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "enable": false,
      "maxSpeed": 50,
      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#ffffff",
      "animation": {
        "h": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "delay": 0,
          "decay": 0,
          "sync": true
        },
        "s": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "delay": 0,
          "decay": 0,
          "sync": true
        },
        "l": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "delay": 0,
          "decay": 0,
          "sync": true
        }
      }
    },
    "groups": {},
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 600,
          "y": 600
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "direction": "none",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": true,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": true,
      "size": false,
      "speed": 1,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {}
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": true,
        "width": 1920,
        "height": 1080
      },
      "limit": 0,
      "value": 300
    },
    "opacity": {
      "random": {
        "enable": true,
        "minimumValue": 0.1
      },
      "value": {
        "min": 0,
        "max": 1
      },
      "animation": {
        "count": 0,
        "enable": true,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none",
        "minimumValue": 0
      }
    },
    "reduceDuplicates": false,
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "close": true,
      "fill": true,
      "options": {},
      "type": "circle"
    },
    "size": {
      "random": {
        "enable": true,
        "minimumValue": 1
      },
      "value": {
        "min": 1,
        "max": 3
      },
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 4,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none",
        "minimumValue": 0.3
      }
    },
    "stroke": {
      "width": 0
    },
    "zIndex": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    },
    "destroy": {
      "bounds": {},
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 3
        },
        "rate": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true,
        "particles": {}
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#ffffff"
      },
      "consent": false,
      "distance": 150,
      "enable": false,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "smooth": false,
  "style": {},
  "themes": [],
  "zLayers": 100,
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
}
```


### Custom Effect
You can create your own particle effect at https://particles.js.org

1. Go to https://particles.js.org/samples
2. Choose any preset or create your own
3. Click on `More` > `Export Config`.
4. Copy the JSON provided there and paste it in `Particle Effect Options` field and save.
