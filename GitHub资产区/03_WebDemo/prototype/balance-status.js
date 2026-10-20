window.BSI_BALANCE_STATUS = {
  "generatedAt": "2026-10-20T00:33:50.146Z",
  "simulationMode": "full-app-vm-dom-audio-stub",
  "ruleSource": "app.js/window.BSI_PROTOTYPE",
  "seed": "audit-2",
  "fixedSeed": "audit-2",
  "runsPerStrategy": 100,
  "maxActions": 100,
  "targetLocation": "kyushu_rift",
  "startupMutation": {
    "mode": "full-app-vm-dom-audio-stub",
    "ruleSource": "app.js/window.BSI_PROTOTYPE",
    "mutation": "throw-before-app-evaluation",
    "passed": true,
    "error": "完整 app 启动失败：RUNTIME_INJECTED_STARTUP_THROW"
  },
  "conditionConfig": {
    "total": 12,
    "language": 3,
    "flag": 5
  },
  "summary": {
    "title": "P0 平衡通过",
    "tone": "stable",
    "scoreText": "谨慎100% / 均衡100% / 冒险100% / 新手100%",
    "nextText": "门槛 8/8；新手告警 68%；神志 P10 31，粮草 P10 30；压力路线：dream_to_rift。",
    "minSuccessRate": 1,
    "maxWarningRate": 1,
    "hardFailures": 0,
    "runtimeErrors": 0,
    "gatePassText": "8/8",
    "gates": [
      {
        "id": "success",
        "label": "四策略通关率",
        "pass": true,
        "value": "100%",
        "target": ">= 98%"
      },
      {
        "id": "hard_failure",
        "label": "硬失败",
        "pass": true,
        "value": "0",
        "target": "0"
      },
      {
        "id": "early_failure",
        "label": "前 3 步死局",
        "pass": true,
        "value": "0",
        "target": "0"
      },
      {
        "id": "balanced_pressure",
        "label": "默认玩家告警",
        "pass": true,
        "value": "6%",
        "target": "2% - 18%"
      },
      {
        "id": "novice_pressure",
        "label": "新手压力告警",
        "pass": true,
        "value": "68%",
        "target": "45% - 85%"
      },
      {
        "id": "novice_rescue",
        "label": "新手补救局",
        "pass": true,
        "value": "0%",
        "target": "<= 5%"
      },
      {
        "id": "sanity_floor",
        "label": "新手神志 P10",
        "pass": true,
        "value": "31",
        "target": ">= 12"
      },
      {
        "id": "grain_floor",
        "label": "粮草 P10 下限",
        "pass": true,
        "value": "30",
        "target": ">= 30"
      }
    ]
  },
  "report": "./balance-status.html",
  "markdownReport": "./balance-status.md",
  "strategies": [
    {
      "strategy": "conservative",
      "label": "谨慎",
      "note": "资源安全优先，模拟谨慎玩家。",
      "runs": 100,
      "successRate": 1,
      "successText": "100%",
      "warningRate": 0,
      "warningText": "0%",
      "rescueRate": 0,
      "rescueText": "0%",
      "averageSteps": 29.79,
      "averageRouteEvents": 4.04,
      "averageRandomRouteEvents": 2.16,
      "averageEvents": 7.44,
      "averageFieldNotes": 6.44,
      "averageSupplies": 5.43,
      "averageConditionChecks": 61.46,
      "averageLockedRouteObservations": 0,
      "averageFlags": 1.74,
      "averageLanguageProgress": 0.01,
      "averageLanguageTotal": 0.08,
      "outcomes": {
        "return_polished": 100
      },
      "failureTypes": {},
      "crises": {
        "axleCrises": 0,
        "grainCrises": 0,
        "sanityCrises": 0,
        "routeLocks": 0,
        "rescues": 0,
        "hardFailures": 0
      },
      "warningRuns": {
        "axle": 0,
        "grain": 0,
        "sanity": 0,
        "any": 0
      },
      "rescuedRuns": 0,
      "runtimeErrors": 0,
      "contextCoverage": [
        "location",
        "fieldNote",
        "supply",
        "route",
        "routeEvent"
      ],
      "failureStepBuckets": {
        "early_0_3": 0,
        "mid_4_6": 0,
        "late_7_plus": 0
      },
      "resourceMinimums": {
        "axle": {
          "min": 40,
          "p10": 48,
          "median": 56
        },
        "grain": {
          "min": 38,
          "p10": 48,
          "median": 56
        },
        "sanity": {
          "min": 49,
          "p10": 56,
          "median": 66
        }
      },
      "highestPressureRoutes": [
        {
          "routeId": "dream_to_rift",
          "pressure": 270007
        },
        {
          "routeId": "feather_to_dream",
          "pressure": 210000
        },
        {
          "routeId": "shrine_to_marsh",
          "pressure": 111000
        },
        {
          "routeId": "central_to_road",
          "pressure": 90000
        },
        {
          "routeId": "mire_to_feather",
          "pressure": 79800
        },
        {
          "routeId": "thunder_to_mire",
          "pressure": 67200
        },
        {
          "routeId": "road_to_shrine",
          "pressure": 66600
        },
        {
          "routeId": "marsh_to_feather",
          "pressure": 62900
        }
      ]
    },
    {
      "strategy": "balanced",
      "label": "均衡",
      "note": "推进与资源兼顾，模拟默认玩家。",
      "runs": 100,
      "successRate": 1,
      "successText": "100%",
      "warningRate": 0.06,
      "warningText": "6%",
      "rescueRate": 0,
      "rescueText": "0%",
      "averageSteps": 26.41,
      "averageRouteEvents": 4.02,
      "averageRandomRouteEvents": 2.12,
      "averageEvents": 7.28,
      "averageFieldNotes": 6.28,
      "averageSupplies": 2.55,
      "averageConditionChecks": 54.61,
      "averageLockedRouteObservations": 0,
      "averageFlags": 2.06,
      "averageLanguageProgress": 0.01,
      "averageLanguageTotal": 0.08,
      "outcomes": {
        "return_true": 60,
        "rift": 40
      },
      "failureTypes": {},
      "crises": {
        "axleCrises": 0,
        "grainCrises": 0,
        "sanityCrises": 0,
        "routeLocks": 0,
        "rescues": 0,
        "hardFailures": 0
      },
      "warningRuns": {
        "axle": 0,
        "grain": 3,
        "sanity": 3,
        "any": 6
      },
      "rescuedRuns": 0,
      "runtimeErrors": 0,
      "contextCoverage": [
        "location",
        "fieldNote",
        "route",
        "routeEvent",
        "supply"
      ],
      "failureStepBuckets": {
        "early_0_3": 0,
        "mid_4_6": 0,
        "late_7_plus": 0
      },
      "resourceMinimums": {
        "axle": {
          "min": 37,
          "p10": 42,
          "median": 52
        },
        "grain": {
          "min": 33,
          "p10": 40,
          "median": 49
        },
        "sanity": {
          "min": 43,
          "p10": 52,
          "median": 65
        }
      },
      "highestPressureRoutes": [
        {
          "routeId": "dream_to_rift",
          "pressure": 270105
        },
        {
          "routeId": "feather_to_dream",
          "pressure": 210002
        },
        {
          "routeId": "shrine_to_marsh",
          "pressure": 96000
        },
        {
          "routeId": "central_to_road",
          "pressure": 90000
        },
        {
          "routeId": "marsh_to_feather",
          "pressure": 69700
        },
        {
          "routeId": "mire_to_feather",
          "pressure": 65800
        },
        {
          "routeId": "road_to_shrine",
          "pressure": 57600
        },
        {
          "routeId": "road_to_birdmouse",
          "pressure": 54000
        }
      ]
    },
    {
      "strategy": "risky",
      "label": "冒险",
      "note": "推进优先，模拟熟悉路线后的冒险玩家。",
      "runs": 100,
      "successRate": 1,
      "successText": "100%",
      "warningRate": 1,
      "warningText": "100%",
      "rescueRate": 0.07,
      "rescueText": "7%",
      "averageSteps": 27.26,
      "averageRouteEvents": 5.45,
      "averageRandomRouteEvents": 3.75,
      "averageEvents": 7.52,
      "averageFieldNotes": 6.52,
      "averageSupplies": 2.18,
      "averageConditionChecks": 54.5,
      "averageLockedRouteObservations": 0,
      "averageFlags": 5.68,
      "averageLanguageProgress": 0.8,
      "averageLanguageTotal": 10.7,
      "outcomes": {
        "lost_mind": 97,
        "rift": 3
      },
      "failureTypes": {},
      "crises": {
        "axleCrises": 0,
        "grainCrises": 0,
        "sanityCrises": 7,
        "routeLocks": 0,
        "rescues": 7,
        "hardFailures": 0
      },
      "warningRuns": {
        "axle": 100,
        "grain": 15,
        "sanity": 100,
        "any": 100
      },
      "rescuedRuns": 7,
      "runtimeErrors": 0,
      "contextCoverage": [
        "location",
        "fieldNote",
        "route",
        "routeEvent",
        "supply",
        "crisis"
      ],
      "failureStepBuckets": {
        "early_0_3": 0,
        "mid_4_6": 0,
        "late_7_plus": 0
      },
      "resourceMinimums": {
        "axle": {
          "min": 7,
          "p10": 11,
          "median": 18
        },
        "grain": {
          "min": 26,
          "p10": 33,
          "median": 44
        },
        "sanity": {
          "min": 0,
          "p10": 0,
          "median": 9
        }
      },
      "highestPressureRoutes": [
        {
          "routeId": "dream_to_rift",
          "pressure": 274913
        },
        {
          "routeId": "feather_to_dream",
          "pressure": 212689
        },
        {
          "routeId": "shrine_to_marsh",
          "pressure": 102016
        },
        {
          "routeId": "mire_to_feather",
          "pressure": 91742
        },
        {
          "routeId": "central_to_road",
          "pressure": 90000
        },
        {
          "routeId": "thunder_to_mire",
          "pressure": 67497
        },
        {
          "routeId": "road_to_shrine",
          "pressure": 61200
        },
        {
          "routeId": "road_to_birdmouse",
          "pressure": 48000
        }
      ]
    },
    {
      "strategy": "novice",
      "label": "新手",
      "note": "会误判补给和路线，模拟第一次玩、不总选最优项的玩家。",
      "runs": 100,
      "successRate": 1,
      "successText": "100%",
      "warningRate": 0.68,
      "warningText": "68%",
      "rescueRate": 0,
      "rescueText": "0%",
      "averageSteps": 27.49,
      "averageRouteEvents": 4.46,
      "averageRandomRouteEvents": 2.64,
      "averageEvents": 7.47,
      "averageFieldNotes": 6.47,
      "averageSupplies": 2.82,
      "averageConditionChecks": 57.69,
      "averageLockedRouteObservations": 1.07,
      "averageFlags": 3.07,
      "averageLanguageProgress": 0.25,
      "averageLanguageTotal": 3.04,
      "outcomes": {
        "rift": 39,
        "return_true": 57,
        "return_polished": 2,
        "lost_mind": 2
      },
      "failureTypes": {},
      "crises": {
        "axleCrises": 0,
        "grainCrises": 0,
        "sanityCrises": 0,
        "routeLocks": 0,
        "rescues": 0,
        "hardFailures": 0
      },
      "warningRuns": {
        "axle": 18,
        "grain": 29,
        "sanity": 43,
        "any": 68
      },
      "rescuedRuns": 0,
      "runtimeErrors": 0,
      "contextCoverage": [
        "location",
        "fieldNote",
        "route",
        "routeEvent",
        "supply"
      ],
      "failureStepBuckets": {
        "early_0_3": 0,
        "mid_4_6": 0,
        "late_7_plus": 0
      },
      "resourceMinimums": {
        "axle": {
          "min": 14,
          "p10": 25,
          "median": 41
        },
        "grain": {
          "min": 21,
          "p10": 30,
          "median": 45
        },
        "sanity": {
          "min": 18,
          "p10": 31,
          "median": 48
        }
      },
      "highestPressureRoutes": [
        {
          "routeId": "dream_to_rift",
          "pressure": 224178
        },
        {
          "routeId": "feather_to_dream",
          "pressure": 143974
        },
        {
          "routeId": "central_to_road",
          "pressure": 79200
        },
        {
          "routeId": "mire_to_feather",
          "pressure": 63025
        },
        {
          "routeId": "shrine_to_marsh",
          "pressure": 57900
        },
        {
          "routeId": "thunder_to_mire",
          "pressure": 46403
        },
        {
          "routeId": "marsh_to_feather",
          "pressure": 42501
        },
        {
          "routeId": "road_to_shrine",
          "pressure": 40500
        }
      ]
    }
  ],
  "startupProbe": {
    "data": true,
    "manifest": true,
    "app": true
  },
  "scriptFiles": [
    "/Users/tusun/Documents/deepseek-harness/default-workspace/busiyi-jiuzhou/GitHub资产区/03_WebDemo/prototype/data.js",
    "/Users/tusun/Documents/deepseek-harness/default-workspace/busiyi-jiuzhou/GitHub资产区/03_WebDemo/prototype/generated-art-manifest.js",
    "/Users/tusun/Documents/deepseek-harness/default-workspace/busiyi-jiuzhou/GitHub资产区/03_WebDemo/prototype/runtime-image-variants.js",
    "/Users/tusun/Documents/deepseek-harness/default-workspace/busiyi-jiuzhou/GitHub资产区/03_WebDemo/prototype/app.js"
  ]
};
