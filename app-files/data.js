var APP_DATA = {
  "scenes": [
    {
      "id": "0-afuera-garage",
      "name": "Afuera Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7961277307919019,
          "pitch": 0.026543359236267605,
          "rotation": 0,
          "target": "20-garage-2"
        },
        {
          "yaw": 0.7807242906507099,
          "pitch": -0.7217061566648137,
          "rotation": 0,
          "target": "1-entrada-exterior"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada-exterior",
      "name": "Entrada Exterior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5999820820910884,
          "pitch": 0.6659075499134435,
          "rotation": 0,
          "target": "0-afuera-garage"
        },
        {
          "yaw": 3.0715610254488244,
          "pitch": 0.0012538579689582718,
          "rotation": 0,
          "target": "2-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.27429614580156,
          "pitch": 0.11811860985069877,
          "rotation": 0,
          "target": "1-entrada-exterior"
        },
        {
          "yaw": -2.222543724661877,
          "pitch": 0.16858060464895175,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": -0.0017692427067039773,
          "pitch": -0.1976405010252833,
          "rotation": 0,
          "target": "18-altillo"
        },
        {
          "yaw": -1.155795282509466,
          "pitch": -0.009437720544219985,
          "rotation": 0,
          "target": "5-cocina"
        },
        {
          "yaw": -0.6186970084197903,
          "pitch": -0.04037268491583745,
          "rotation": 0,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2270441332288051,
          "pitch": -0.0076233603257005456,
          "rotation": 0,
          "target": "4-comedor"
        },
        {
          "yaw": 2.080492088604494,
          "pitch": 0.10047786472851428,
          "rotation": 0,
          "target": "2-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-comedor",
      "name": "Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9664116045404612,
          "pitch": 0.4614723364699582,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": 2.880076885561971,
          "pitch": 0.2222785895623005,
          "rotation": 0,
          "target": "5-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0055717126238743,
          "pitch": 0.17388790864938208,
          "rotation": 0,
          "target": "4-comedor"
        },
        {
          "yaw": 1.1279295693937677,
          "pitch": 0.12952191892917675,
          "rotation": 0,
          "target": "10-cocina-2"
        },
        {
          "yaw": -0.9852898229022262,
          "pitch": 0.11887879124552825,
          "rotation": 0,
          "target": "7-repartidor-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cuarto-servicio",
      "name": "Cuarto Servicio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.24166097335307057,
          "pitch": 0.20407940012925785,
          "rotation": 0,
          "target": "7-repartidor-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-repartidor-cocina",
      "name": "Repartidor cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3029424059956263,
          "pitch": 0.2842829280132584,
          "rotation": 0,
          "target": "5-cocina"
        },
        {
          "yaw": 1.7379536892275205,
          "pitch": 0.21478008081970756,
          "rotation": 0,
          "target": "6-cuarto-servicio"
        },
        {
          "yaw": 3.062397652036137,
          "pitch": 0.22005418347644756,
          "rotation": 0,
          "target": "8-jardin1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-jardin1",
      "name": "Jardin1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1503832402373746,
          "pitch": -0.10289227640473975,
          "rotation": 0,
          "target": "9-pileta"
        },
        {
          "yaw": -2.9616695981555328,
          "pitch": 0.05457965753318206,
          "rotation": 0,
          "target": "7-repartidor-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pileta",
      "name": "Pileta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9904837107016355,
          "pitch": 0.4683118381410942,
          "rotation": 0,
          "target": "8-jardin1"
        },
        {
          "yaw": 2.9300594022063864,
          "pitch": 0.18202605634448865,
          "rotation": 0,
          "target": "7-repartidor-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-cocina-2",
      "name": "Cocina 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9342654183942507,
          "pitch": 0.15037710893841627,
          "rotation": 0,
          "target": "5-cocina"
        },
        {
          "yaw": -2.4039968178102775,
          "pitch": -0.06853269323499411,
          "rotation": 0,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-vestidor",
      "name": "Vestidor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.111460662025234,
          "pitch": 0.11635322252339364,
          "rotation": 0,
          "target": "14-pasillo"
        },
        {
          "yaw": -1.27802163925859,
          "pitch": 0.12316934351738418,
          "rotation": 0,
          "target": "13-bao-principal"
        },
        {
          "yaw": 2.144775447303193,
          "pitch": 0.25075099739022555,
          "rotation": 0,
          "target": "12-cuarto-peincipal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cuarto-peincipal",
      "name": "Cuarto Peincipal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.06034268270108,
          "pitch": -0.10348997495358958,
          "rotation": 0,
          "target": "11-vestidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bao-principal",
      "name": "Baño principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3073004229532525,
          "pitch": 0.18940767300139782,
          "rotation": 0,
          "target": "11-vestidor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2522185235392502,
          "pitch": 0.24203608184241787,
          "rotation": 0,
          "target": "11-vestidor"
        },
        {
          "yaw": -3.0894174708322915,
          "pitch": 0.04075984843707303,
          "rotation": 0,
          "target": "2-entrada"
        },
        {
          "yaw": -1.870610402794604,
          "pitch": 0.20692336345245366,
          "rotation": 0,
          "target": "15-bao"
        },
        {
          "yaw": -0.20106096458995637,
          "pitch": 0.17320976011167488,
          "rotation": 0,
          "target": "17-cuarto-2"
        },
        {
          "yaw": 0.09693314288685251,
          "pitch": 0.18814338436291322,
          "rotation": 0,
          "target": "16-cuarto-1"
        },
        {
          "yaw": 2.8721976355653087,
          "pitch": 0.1600258909751826,
          "rotation": 0,
          "target": "19-garage1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2866063579001707,
          "pitch": 0.20850063021632614,
          "rotation": 0,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-cuarto-1",
      "name": "Cuarto 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0571699268270773,
          "pitch": 0.20421633375502957,
          "rotation": 0,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-cuarto-2",
      "name": "Cuarto 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8696861936054976,
          "pitch": 0.1817002690346694,
          "rotation": 0,
          "target": "14-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-altillo",
      "name": "Altillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1224187404650223,
          "pitch": 0.36280149398706385,
          "rotation": 0,
          "target": "2-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-garage1",
      "name": "Garage1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5657224406378987,
          "pitch": -0.28430400453897064,
          "rotation": 0,
          "target": "14-pasillo"
        },
        {
          "yaw": 1.5049353831691752,
          "pitch": 0.1699525594003095,
          "rotation": 0,
          "target": "20-garage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-garage-2",
      "name": "Garage 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8203027761222224,
          "pitch": 0.13644107805172645,
          "rotation": 0,
          "target": "19-garage1"
        },
        {
          "yaw": -2.6828992773823828,
          "pitch": 0.08521476069958567,
          "rotation": 0,
          "target": "22-lavadero-garage"
        },
        {
          "yaw": 2.6416815896057546,
          "pitch": 0.014282684538418522,
          "rotation": 0,
          "target": "21-cuarto-garage"
        },
        {
          "yaw": 0.4889600019025018,
          "pitch": 0.1864095733696356,
          "rotation": 0,
          "target": "0-afuera-garage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-cuarto-garage",
      "name": "Cuarto garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9382549747698024,
          "pitch": 0.13713070611945,
          "rotation": 0,
          "target": "20-garage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-lavadero-garage",
      "name": "Lavadero Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.271490674370347,
          "pitch": 0.2599448547288077,
          "rotation": 0,
          "target": "20-garage-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Casa Piedra",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
