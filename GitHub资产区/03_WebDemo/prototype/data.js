const BSI_CORE_DATA = {
  saveVersion: 2,
  resourceKeys: ["axle", "grain", "sanity"],
  terrainKeys: ["road", "market", "water", "rift"],
  items: [
    { id: "bixie_bell", name: "辟邪铃", kind: "通神器", description: "行路神志 -1", effects: { routeSanitySave: 1 } },
    { id: "old_gear", name: "旧车具", kind: "行路器", description: "启程车轴 -1", effects: { routeAxleSave: 1 } },
    { id: "yubu_shoes", name: "禹步履", kind: "行路器", description: "水路车轴再 -2", effects: { waterAxleSave: 2 } },
    { id: "qingniao_feather", name: "青鸟羽", kind: "异兽器", description: "裂隙神志 -3", effects: { riftSanitySave: 3 } },
    { id: "xiangrang_pouch", name: "息壤囊", kind: "生存器", description: "抵达粮草 +2", effects: { arrivalGrain: 2 } }
  ],
  modes: {
    standard: {
      id: "standard",
      label: "标准",
      description: "标准难度：路耗略高，三条资源都要照看。",
      routeCostMultiplier: { axle: 1.5, grain: 1.08, sanity: 0.88 }
    },
    journey: {
      id: "journey",
      label: "远行",
      description: "初始资源更少、路线更贵，资源曲线持续向下。",
      startResources: { axle: 56, grain: 62, sanity: 60 },
      routeCostMultiplier: { axle: 1.6, grain: 1.3, sanity: 1.15 },
      maxRescuesBeforeStranding: 1
    }
  },
  balanceConfig: {
    randomRouteEventBaseChance: 0.21,
    randomRouteEventMaxChance: 0.63,
    routeEventBreatherStreak: 2,
    maxRescuesBeforeStranding: 3,
    hardBadLuckThreshold: 96,
    resourceCriticalLimit: 15,
    sameCrisisHardFailCount: 2,
    breatherBadLuckLimit: 55,
    badLuckMidBoostThreshold: 35,
    badLuckMidBoost: 0.08,
    badLuckHighBoostThreshold: 65,
    badLuckHighBoost: 0.14,
    dangerEventChanceBoost: 0.09,
    highChanceDangerCount: 2,
    highChanceBadLuckThreshold: 72,
    highChanceFloor: 0.58,
    rescueWeightLowResourceLimit: 45,
    rescueWeightSupply: 22,
    rescueWeightRest: 18,
    rescueWeightItem: 14,
    rescueWeightBadLuckThreshold: 55,
    rescueWeightBadLuck: 28,
    rescueForceBadLuckThreshold: 60,
    sanityEventPenaltyLimit: 28,
    sanityEventPenalty: -8,
    lowSanityProtectionLimit: 30,
    lowSanityProtectionMaxLoss: -8,
    highPressureSanityLoss: -6,
    crisisBadLuckGain: 12,
    badLuckRoutePressureDivisor: 10,
    badLuckEventPressureDivisor: 14,
    badLuckEventRecoveryDivisor: 12,
    badLuckCrisisRecoveryDivisor: 10,
    badLuckLowResourceLimit: 20,
    badLuckLowResourceShift: 3,
    resourceWarningLimits: { axle: 30, grain: 35, sanity: 45 }
  }
};

const BSI_P0_CONTENT_PACK = {
  id: "p0",
  name: "P0 原型基线",
  startLocation: "central_post",
  stageAssets: {
    map: {
      background: "../../02_设计资产/可用素材/地图底图/MAP-002_九州大地图战略底图暗帛书变体.png"
    },
    locationIllustrations: {
      central_post: "../../02_设计资产/可用素材/地点剪影/LOC-002_三地点场景节点素材图.png",
      old_king_road: "../../02_设计资产/可用素材/地点图/LOC-008_废关古道地点显影图.png",
      qingqiu_outer_city: "../../02_设计资产/可用素材/地点剪影/LOC-004_异族边境地标剪影场景.png",
      abandoned_pass: "../../02_设计资产/可用素材/地点剪影/LOC-005_废关祭所地点图.png",
      bird_mouse_pass: "../../02_设计资产/可用素材/地点剪影/LOC-003_异族边境地标剪影裁切源图.png",
      nameless_shrine: "../../02_设计资产/可用素材/地点剪影/LOC-005_废关祭所地点图.png",
      thunder_marsh: "../../02_设计资产/可用素材/地点剪影/LOC-006_赤水渡口地点图.png",
      white_feather_mire: "../../02_设计资产/可用素材/地点剪影/LOC-006_赤水渡口地点图.png",
      feather_folk_ford: "../../02_设计资产/可用素材/地点剪影/LOC-006_赤水渡口地点图.png",
      black_teeth_market: "../../02_设计资产/可用素材/地点剪影/LOC-004_异族边境地标剪影场景.png",
      dream_map_post: "../../02_设计资产/可用素材/地点剪影/LOC-002_三地点场景节点素材图.png",
      red_marsh: "../../02_设计资产/可用素材/地点剪影/LOC-006_赤水渡口地点图.png",
      broken_stele: "../../02_设计资产/可用素材/地点剪影/LOC-005_废关祭所地点图.png",
      kyushu_rift: "../../02_设计资产/可用素材/地点剪影/LOC-007_无声林入口地点图.png",
      shaxu: "../../02_设计资产/AI生成_2026-10-18/shaxu-region.png",
      xuansu: "../../02_设计资产/AI生成_2026-10-18/v2/xuansu-region-v2.png"
    },
    eventIllustrations: {
      post_gate: "../../02_设计资产/可用素材/地点剪影/LOC-002_三地点场景节点素材图.png",
      split_tracks: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      closed_order: "../../02_设计资产/可用素材/地点剪影/LOC-005_废关祭所地点图.png",
      ground_thunder: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      black_trade: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
      qingqiu_lamps: "../../02_设计资产/可用素材/背景长图/BG-011_青丘边境荒外古道.png",
      hollow_pass: "../../02_设计资产/可用素材/背景长图/BG-004_裂山荒泽废墟.png",
      nameless_prayer: "../../02_设计资产/可用素材/地点剪影/LOC-005_废关祭所地点图.png",
      sunken_feather: "../../02_设计资产/可用素材/地点剪影/LOC-006_赤水渡口地点图.png",
      feather_ford_debt: "../../02_设计资产/可用素材/地点剪影/LOC-006_赤水渡口地点图.png",
      dream_map_gate: "../../02_设计资产/可用素材/背景长图/BG-014_归墟边缘横向背景图.png",
      red_bones: "../../02_设计资产/可用素材/背景长图/BG-005_赤水骨滩荒泽.png",
      read_name: "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png",
      rift_dream: "../../02_设计资产/可用素材/背景长图/BG-013_归墟边缘暗水裂隙.png",
      shaxu_well: "../../02_设计资产/可用素材/背景长图/BG-008_横向山海旅途舞台总场景.png",
      xuansu_ice: "../../02_设计资产/可用素材/背景长图/BG-006_废关古道暮色.png"
    },
    routeEventIllustrations: {
      wheel_omen: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      roadside_shrine: "../../02_设计资产/可用素材/地点剪影/LOC-005_废关祭所地点图.png",
      black_cloud: "../../02_设计资产/可用素材/背景长图/BG-007_九州边境天象天空层.png",
      wenao_fish_rain: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      dang_kang_field_cry: "../../02_设计资产/可用素材/背景长图/BG-008_横向山海旅途舞台总场景.png",
      xuan_gui_shell_bridge: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      zhu_bird_name_call: "../../02_设计资产/可用素材/背景长图/BG-011_青丘边境荒外古道.png",
      fox_lamp_tail: "../../02_设计资产/可用素材/背景长图/BG-011_青丘边境荒外古道.png",
      black_teeth_scale_price: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
      ming_snake_crosswind: "../../02_设计资产/可用素材/背景长图/BG-004_裂山荒泽废墟.png",
      bone_ox_rut: "../../02_设计资产/可用素材/背景长图/BG-006_废关古道暮色.png",
      mirror_reed_bed: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      dream_cicada_shell: "../../02_设计资产/可用素材/背景长图/BG-014_归墟边缘横向背景图.png",
      rnd_loose_axle_song: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_bitter_grass_soup: "../../02_设计资产/可用素材/背景长图/BG-008_横向山海旅途舞台总场景.png",
      rnd_wrong_milestone: "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png",
      rnd_silent_barter: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
      rnd_repeated_footprints: "../../02_设计资产/可用素材/背景长图/BG-006_废关古道暮色.png",
      rnd_count_names_rest: "../../02_设计资产/可用素材/地点剪影/LOC-005_废关祭所地点图.png",
      rnd_low_black_cloud_gap: "../../02_设计资产/可用素材/背景长图/BG-007_九州边境天象天空层.png",
      rnd_breathing_map: "../../02_设计资产/可用素材/背景长图/BG-014_归墟边缘横向背景图.png",
      rnd_red_backflow: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_dream_toll: "../../02_设计资产/可用素材/背景长图/BG-014_归墟边缘横向背景图.png",
      rnd_feather_roll_call: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_stele_names: "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png",
      rnd_black_scale_debt: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
      rnd_marsh_drum_rest: "../../02_设计资产/可用素材/背景长图/BG-004_裂山荒泽废墟.png",
      rnd_pass_seal_ledger: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_burrow_clay_echo: "../../02_设计资产/可用素材/背景长图/BG-004_裂山荒泽废墟.png",
      rnd_market_eye_price: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
      rnd_mire_feather_toll: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_dream_ink_rain: "../../02_设计资产/可用素材/背景长图/BG-014_归墟边缘横向背景图.png",
      rnd_oldroad_milepost: "../../02_设计资产/可用素材/背景长图/BG-006_废关古道暮色.png",
      rnd_last_grain_cache: "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png",
      rnd_marsh_reed_omen: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_red_bone_market: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_stele_ink_well: "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png",
      rnd_qingqiu_lamp_debt: "../../02_设计资产/可用素材/背景长图/BG-011_青丘边境荒外古道.png",
      rnd_qingqiu_name_toll: "../../02_设计资产/可用素材/背景长图/BG-011_青丘边境荒外古道.png",
      rnd_mire_sunken_bell: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_central_old_ledger: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_market_salt_price: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
      rnd_shrine_ash_face: "../../02_设计资产/可用素材/地点剪影/LOC-005_废关祭所地点图.png",
      rnd_qingqiu_lamp_moth: "../../02_设计资产/可用素材/背景长图/BG-011_青丘边境荒外古道.png",
      rnd_pass_broken_arrow: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_burrow_rat_king: "../../02_设计资产/可用素材/背景长图/BG-004_裂山荒泽废墟.png",
      rnd_shrine_back_road: "../../02_设计资产/可用素材/地点剪影/LOC-005_废关祭所地点图.png",
      rnd_market_bone_coin: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
      rnd_marsh_wildfire: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_realm_shaxu: "../../02_设计资产/AI生成_2026-10-18/shaxu-region.png",
      rnd_realm_cangwu: "../../02_设计资产/AI生成_2026-10-18/v2/cangwu-region-v2.png",
      rnd_realm_wanqiu: "../../02_设计资产/AI生成_2026-10-18/v2/wanqiu-region-v2.png",
      rnd_realm_xuansu: "../../02_设计资产/AI生成_2026-10-18/v2/xuansu-region-v2.png",
      rnd_realm_chixiao: "../../02_设计资产/AI生成_2026-10-18/v2/chixiao-region-v2.png",
      rnd_realm_luochen: "../../02_设计资产/AI生成_2026-10-18/luochen-region.png",
      rnd_realm_cuiyou: "../../02_设计资产/AI生成_2026-10-18/v2/cuiyou-region-v2.png",
      rnd_realm_fenghuo: "../../02_设计资产/可用素材/背景长图/BG-008_横向山海旅途舞台总场景.png",
      rnd_realm_huangu: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_realm_liudeng: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_realm_zaobing: "../../02_设计资产/可用素材/背景长图/BG-006_废关古道暮色.png",
      rnd_realm_wumian: "../../02_设计资产/可用素材/背景长图/BG-004_裂山荒泽废墟.png",
      rnd_realm_fanshui: "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png",
      rnd_realm_qinling: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_central_riders: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_qingqiu_mask: "../../02_设计资产/可用素材/背景长图/BG-011_青丘边境荒外古道.png",
      rnd_shrine_bell: "../../02_设计资产/可用素材/地点剪影/LOC-005_废关祭所地点图.png",
      rnd_pass_toll: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_burrow_eggs: "../../02_设计资产/可用素材/背景长图/BG-004_裂山荒泽废墟.png",
      rnd_market_teeth: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
      rnd_marsh_boat: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_stele_echo: "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png",
      rnd_qingqiu_tail: "../../02_设计资产/可用素材/背景长图/BG-011_青丘边境荒外古道.png",
      rnd_pass_seal: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_burrow_wind: "../../02_设计资产/可用素材/背景长图/BG-004_裂山荒泽废墟.png",
      rnd_market_scale: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
      rnd_marsh_mist: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_mire_feather: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_stele_moss: "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png",
      rnd_dream_lamp: "../../02_设计资产/可用素材/背景长图/BG-014_归墟边缘横向背景图.png",
      rnd_red_salt: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_ridge_wind: "../../02_设计资产/可用素材/背景长图/BG-006_废关古道暮色.png",
      rnd_ford_net: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_black_salt: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
      rnd_marsh_lantern: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_dream_ledger: "../../02_设计资产/可用素材/背景长图/BG-014_归墟边缘横向背景图.png",
      rnd_road_boneshell: "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png",
      rnd_pass_lantern: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_post_roster: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_bird_dust: "../../02_设计资产/可用素材/背景长图/BG-004_裂山荒泽废墟.png",
      rnd_qingqiu_credit: "../../02_设计资产/可用素材/背景长图/BG-011_青丘边境荒外古道.png",
      rnd_red_ferry: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_mire_reed: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_stele_rubbing: "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png",
      rnd_dream_bell: "../../02_设计资产/可用素材/背景长图/BG-014_归墟边缘横向背景图.png",
      rnd_black_ledger: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
      rnd_shrine_ash: "../../02_设计资产/可用素材/地点剪影/LOC-005_废关祭所地点图.png",
      rnd_pass_arrow: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_post_well: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
      rnd_marsh_mud: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_feather_tide: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
      rnd_dream_key: "../../02_设计资产/可用素材/背景长图/BG-014_归墟边缘横向背景图.png"
    },
    endingIllustrations: {
      return: "../../02_设计资产/可用素材/结局失败图/END-001_归返中原结局插图.png",
      lost: "../../02_设计资产/可用素材/结局失败图/END-002_迷失九州结局插图.png",
      rift: "../../02_设计资产/可用素材/结局失败图/END-003_九州裂隙结局插图.png",
      lost_mind: "../../02_设计资产/可用素材/结局失败图/END-002_迷失九州结局插图.png",
      return_true: "../../02_设计资产/可用素材/结局失败图/END-001_归返中原结局插图.png",
      return_polished: "../../02_设计资产/可用素材/结局失败图/END-001_归返中原结局插图.png",
      burn: "../../02_设计资产/AI生成_2026-10-18/burn-ending-keyart.png",
      stranded: "../../02_设计资产/可用素材/结局失败图/END-000_结局页通用旧帛书地图背景.png"
    },
    failureIllustrations: {
      axle: "../../02_设计资产/可用素材/结局失败图/FAIL-001_断轴失败状态插图.png",
      grain: "../../02_设计资产/可用素材/结局失败图/FAIL-002_粮尽失败状态插图.png",
      sanity: "../../02_设计资产/可用素材/结局失败图/FAIL-003_神志崩坏失败状态插图.png"
    },
    generatedStageBackgrounds: {
      road: "../../02_设计资产/可用素材/A组风格锁定/MID-BG-ROAD-001_古道荒原路段长图.png",
      market: "../../02_设计资产/可用素材/A组风格锁定/MID-BG-MARKET-001_边市废关路段长图.png",
      water: "../../02_设计资产/可用素材/A组风格锁定/MID-BG-WATER-001_雷泽赤水路段长图.png",
      rift: "../../02_设计资产/可用素材/A组风格锁定/MID-BG-RIFT-001_归墟裂隙路段长图.png"
    },
    profiles: {
      default: {
        label: "横向山海长卷",
        travelMode: "scenery",
        generatedBackgroundKey: "road",
        background: "../../02_设计资产/可用素材/背景长图/BG-008_横向山海旅途舞台总场景.png",
        backgroundPosition: "48% center",
        foreground: "../../02_设计资产/可用素材/分层素材/FG-004_荒废土地破碎前景视差层.png",
        foregroundOpacity: 0.76,
        atmosphere: "../../02_设计资产/可用素材/分层素材/OV-004_云雾风沙气流轻叠层.png",
        atmosphereOpacity: 0.24,
        pollution: "../../02_设计资产/可用素材/分层素材/OV-008_黑底神志污染幻路重复道路.png",
        pollutionOpacity: 0.28,
        caravan: "../../02_设计资产/可用素材/车队层/CAR-013_双马辎重车透明抠图.png",
        caravanWidth: "clamp(112px, 13vw, 210px)",
        caravanBottom: "7%",
        caravanOpacity: 0.16,
        caravanFilter: "contrast(0.9) saturate(0.48) sepia(0.38)"
      },
      oldRoad: {
        label: "废关古道",
        generatedBackgroundKey: "road",
        background: "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png",
        backgroundPosition: "42% center",
        foreground: "../../02_设计资产/可用素材/分层素材/FG-004_荒废土地破碎前景视差层.png",
        foregroundOpacity: 0.06,
        foregroundBlend: "multiply",
        atmosphere: "../../02_设计资产/可用素材/分层素材/OV-004_云雾风沙气流轻叠层.png",
        atmosphereOpacity: 0.2,
        pollution: "../../02_设计资产/可用素材/分层素材/OV-008_黑底神志污染幻路重复道路.png",
        pollutionOpacity: 0.26,
        caravanOpacity: 0.78,
        caravanFilter: "contrast(0.95) saturate(0.62) sepia(0.24)",
        caravanBottom: "8%"
      },
      qingqiu: {
        label: "青丘边境",
        generatedBackgroundKey: "market",
        background: "../../02_设计资产/可用素材/背景长图/BG-011_青丘边境荒外古道.png",
        backgroundPosition: "46% center",
        foreground: "../../02_设计资产/可用素材/分层素材/FG-004_荒废土地破碎前景视差层.png",
        foregroundOpacity: 0.08,
        foregroundBlend: "multiply",
        atmosphere: "../../02_设计资产/可用素材/分层素材/OV-004_云雾风沙气流轻叠层.png",
        atmosphereOpacity: 0.22,
        pollution: "../../02_设计资产/可用素材/分层素材/OV-010_黑底神志污染远山重影断裂.png",
        pollutionOpacity: 0.28,
        caravanOpacity: 0.8,
        caravanFilter: "contrast(0.95) saturate(0.62) sepia(0.24)",
        caravanBottom: "8%"
      },
      oldPass: {
        label: "废关旧令",
        generatedBackgroundKey: "market",
        background: "../../02_设计资产/可用素材/背景长图/BG-006_废关古道暮色.png",
        backgroundPosition: "44% center",
        foreground: "../../02_设计资产/可用素材/分层素材/FG-003_荒外路面泥痕车辙前景层.png",
        foregroundOpacity: 0.08,
        foregroundBlend: "multiply",
        atmosphere: "../../02_设计资产/可用素材/分层素材/OV-004_云雾风沙气流轻叠层.png",
        atmosphereOpacity: 0.25,
        pollution: "../../02_设计资产/可用素材/分层素材/OV-008_黑底神志污染幻路重复道路.png",
        pollutionOpacity: 0.3,
        caravanOpacity: 0.8,
        caravanFilter: "contrast(0.95) saturate(0.62) sepia(0.24)",
        caravanBottom: "8%"
      },
      mountainPass: {
        label: "鸟鼠夹道",
        generatedBackgroundKey: "road",
        background: "../../02_设计资产/可用素材/背景长图/BG-004_裂山荒泽废墟.png",
        backgroundPosition: "50% center",
        foreground: "../../02_设计资产/可用素材/分层素材/FG-004_荒废土地破碎前景视差层.png",
        foregroundOpacity: 0.08,
        foregroundBlend: "multiply",
        atmosphere: "../../02_设计资产/可用素材/分层素材/OV-006_昆仑云海星辰远景层.png",
        atmosphereOpacity: 0.18,
        pollution: "../../02_设计资产/可用素材/分层素材/OV-010_黑底神志污染远山重影断裂.png",
        pollutionOpacity: 0.32,
        caravanOpacity: 0.8,
        caravanFilter: "contrast(0.95) saturate(0.62) sepia(0.24)",
        caravanBottom: "8%"
      },
      blackMarket: {
        label: "黑齿市口",
        generatedBackgroundKey: "market",
        background: "../../02_设计资产/可用素材/背景长图/BG-012_黑齿国外缘黑石土路.png",
        backgroundPosition: "52% center",
        foreground: "../../02_设计资产/可用素材/分层素材/FG-004_荒废土地破碎前景视差层.png",
        foregroundOpacity: 0.08,
        foregroundBlend: "multiply",
        atmosphere: "../../02_设计资产/可用素材/分层素材/OV-004_云雾风沙气流轻叠层.png",
        atmosphereOpacity: 0.2,
        pollution: "../../02_设计资产/可用素材/分层素材/OV-007_低神志星象远山后景层.png",
        pollutionOpacity: 0.3,
        caravanOpacity: 0.8,
        caravanFilter: "contrast(0.95) saturate(0.62) sepia(0.24)",
        caravanBottom: "8%"
      },
      marsh: {
        label: "泽畔浅行",
        generatedBackgroundKey: "water",
        background: "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png",
        backgroundPosition: "50% center",
        foreground: "../../02_设计资产/可用素材/分层素材/FG-005_水泽边缘前景视差层.png",
        foregroundOpacity: 0.74,
        atmosphere: "../../02_设计资产/可用素材/分层素材/OV-004_云雾风沙气流轻叠层.png",
        atmosphereOpacity: 0.26,
        pollution: "../../02_设计资产/可用素材/分层素材/OV-011_黑底神志污染赤水水纹幻路.png",
        pollutionOpacity: 0.34,
        caravanBottom: "13%"
      },
      redMarsh: {
        label: "赤水骨滩",
        generatedBackgroundKey: "water",
        background: "../../02_设计资产/可用素材/背景长图/BG-005_赤水骨滩荒泽.png",
        backgroundPosition: "50% center",
        foreground: "../../02_设计资产/可用素材/分层素材/FG-005_水泽边缘前景视差层.png",
        foregroundOpacity: 0.68,
        atmosphere: "../../02_设计资产/可用素材/分层素材/OV-004_云雾风沙气流轻叠层.png",
        atmosphereOpacity: 0.3,
        pollution: "../../02_设计资产/可用素材/分层素材/OV-011_黑底神志污染赤水水纹幻路.png",
        pollutionOpacity: 0.42,
        caravanBottom: "13%"
      },
      stele: {
        label: "巫咸断碑",
        generatedBackgroundKey: "road",
        background: "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png",
        backgroundPosition: "48% center",
        foreground: "../../02_设计资产/可用素材/分层素材/FG-004_荒废土地破碎前景视差层.png",
        foregroundOpacity: 0.08,
        foregroundBlend: "multiply",
        atmosphere: "../../02_设计资产/可用素材/分层素材/OV-006_昆仑云海星辰远景层.png",
        atmosphereOpacity: 0.18,
        pollution: "../../02_设计资产/可用素材/分层素材/OV-010_黑底神志污染远山重影断裂.png",
        pollutionOpacity: 0.3,
        caravanOpacity: 0.8,
        caravanFilter: "contrast(0.95) saturate(0.62) sepia(0.24)"
      },
      dream: {
        label: "梦图卷口",
        generatedBackgroundKey: "rift",
        background: "../../02_设计资产/可用素材/背景长图/BG-014_归墟边缘横向背景图.png",
        backgroundPosition: "56% center",
        foreground: "../../02_设计资产/可用素材/分层素材/FG-005_水泽边缘前景视差层.png",
        foregroundOpacity: 0.62,
        atmosphere: "../../02_设计资产/可用素材/分层素材/OV-006_昆仑云海星辰远景层.png",
        atmosphereOpacity: 0.22,
        pollution: "../../02_设计资产/可用素材/分层素材/OV-009_黑底神志污染天象第二月亮.png",
        pollutionOpacity: 0.36,
        caravanBottom: "13%"
      },
      rift: {
        label: "归墟裂隙",
        generatedBackgroundKey: "rift",
        background: "../../02_设计资产/可用素材/背景长图/BG-013_归墟边缘暗水裂隙.png",
        backgroundPosition: "54% center",
        foreground: "../../02_设计资产/可用素材/分层素材/FG-005_水泽边缘前景视差层.png",
        foregroundOpacity: 0.66,
        atmosphere: "../../02_设计资产/可用素材/分层素材/OV-007_低神志星象远山后景层.png",
        atmosphereOpacity: 0.22,
        pollution: "../../02_设计资产/可用素材/分层素材/OV-010_黑底神志污染远山重影断裂.png",
        pollutionOpacity: 0.38,
        caravanBottom: "14%"
      }
    },
    terrainProfiles: {
      road: "oldRoad",
      market: "blackMarket",
      water: "marsh",
      rift: "rift"
    },
    locationProfiles: {
      central_post: "default",
      old_king_road: "oldRoad",
      qingqiu_outer_city: "qingqiu",
      abandoned_pass: "oldPass",
      nameless_shrine: "oldRoad",
      bird_mouse_pass: "mountainPass",
      thunder_marsh: "marsh",
      white_feather_mire: "marsh",
      feather_folk_ford: "marsh",
      black_teeth_market: "blackMarket",
      red_marsh: "redMarsh",
      broken_stele: "stele",
      dream_map_post: "dream",
      kyushu_rift: "rift"
    }
  },
  locations: {
    central_post: {
      id: "central_post",
      name: "中原驿",
      region: "人间边境",
      terrain: "road",
      event: "post_gate",
      map: { x: 50, y: 90, step: 0 },
      arrivalText: "驿灯还亮，你们在最后一段官路前停下。",
      detail: "驿灯还亮，旧王朝的里程牌只剩向西的空白。粮袋在檐下重新扎紧，车轴也能借几枚驿钉稳住。过了这里，官路只剩传说。",
      sanityDetails: {
        uneasy: "驿灯还亮，里程牌却像把数字都咽了下去。粮袋能扎紧，车轴也能补稳，只是檐下风声总像有人催你们快些离开。",
        mad: "驿灯没有照路，它在数人。里程牌向西空着，像等车队把自己的日数填进去。粮袋扎得越紧，袋底越像有牙在磨。"
      },
      supplyDiscoveryText: "驿仓角落还剩一袋干粟，铜钉压在粮袋底。",
      fieldNote: {
        category: "地风",
        subject: "驿灯与空里程",
        evidence: "里程牌上的数字已被风磨去，只剩向西的空白；驿灯仍为过界者留着。",
        clue: "官路在此断成传说，后续路线多靠旧物与口供辨认。",
        effect: { axle: 0, grain: 0, sanity: 1 }
      },
      supplies: [
        {
          id: "central_repair",
          label: "借驿钉修轴",
          hint: "车轴 +6，粮草 -2",
          effect: { axle: 6, grain: -2, sanity: 0 },
          result: "驿卒从旧木匣里取出几枚铜钉，车轮声稳了一些。"
        },
        {
          id: "central_grain",
          label: "清点驿粮",
          hint: "粮草 +8",
          effect: { axle: 0, grain: 8, sanity: 0 },
          result: "你们在驿仓角落找出一小袋干粟，足够队伍多撑一段路。"
        }
      ]
    },
    old_king_road: {
      id: "old_king_road",
      name: "故王道",
      region: "旧王道",
      terrain: "road",
      event: "split_tracks",
      map: { x: 50, y: 74, step: 1 },
      arrivalText: "深车辙把车往西牵，像旧路还认得队伍。",
      detail: "王道石基半埋在尘里，深车辙还把车往西牵。白日路直，入暮后会多出一条不在图上的辙。有人说那是前队留下的错路。",
      sanityDetails: {
        uneasy: "王道石基半埋在尘里，车辙却比昨日更深。白日只有一条路，入暮后多出一条不在图上的辙，像有人刚替你们走过。",
        mad: "王道不是路，是一只旧手。深辙扣住车轮往西牵，暮色里那条错路开始学你们的轮声，走在车队前面。"
      },
      supplyDiscoveryText: "半埋王道石可垫轮，石缝里还夹着旧贡绳。",
      fieldNote: {
        category: "地风",
        subject: "故王车辙",
        evidence: "旧石基半埋，暮后多出一条不在图上的车辙。",
        clue: "记录车辙深浅可帮助辨别王道与错路，但夜间抄录会磨损神志。",
        effect: { axle: -1, grain: 0, sanity: 1 }
      },
      supplies: [
        {
          id: "road_stones",
          label: "垫旧道石",
          hint: "车轴 +7，神志 -2",
          effect: { axle: 7, grain: 0, sanity: -2 },
          result: "你们把半埋的王道石撬起垫在车底，石缝里传出很轻的叹息。"
        },
        {
          id: "road_rope",
          label: "绞旧绳束轮",
          hint: "车轴 +4，粮草 -2",
          effect: { axle: 4, grain: -2, sanity: 0 },
          result: "旧贡绳还能绞紧车轮，只是队伍得少煮一锅粟。"
        }
      ]
    },
    qingqiu_outer_city: {
      id: "qingqiu_outer_city",
      name: "青丘外邑",
      region: "异域边邑",
      terrain: "market",
      event: "qingqiu_lamps",
      map: { x: 20, y: 74, step: 1 },
      arrivalText: "狐灯一盏盏亮起，城影低伏在旧路尽头。",
      detail: "青丘外邑挂着成排狐灯，城墙低得像随时能越过。市人交易温和，却总先问真名还是假名。",
      sanityDetails: {
        uneasy: "青丘外邑的狐灯一盏盏亮起，城墙低得像在伏身听话。市人笑得温和，却只问真名和假名，像除此之外都不算人。",
        mad: "狐灯不是灯，是尾。九条影子贴着城墙扫来扫去，摊主没有脸，只有一口温和的声音：真名，还是假名？"
      },
      supplyDiscoveryText: "狐灯能换一夜安眠，干粮却带着说不清的甜腥。",
      fieldNote: {
        category: "民风",
        subject: "真名与假名",
        evidence: "市人交易温和，却总先问真名还是假名。",
        clue: "青丘风俗可作为异族交涉样本，问得太细会消耗粮礼。",
        effect: { axle: 0, grain: -1, sanity: 2 }
      },
      supplies: [
        {
          id: "qingqiu_lamp",
          label: "换狐灯静夜",
          hint: "神志 +7，粮草 -4",
          effect: { axle: 0, grain: -4, sanity: 7 },
          result: "一盏不灭小灯挂上车头，夜路里的影子终于少了几层。"
        },
        {
          id: "qingqiu_grain",
          label: "换边邑干粮",
          hint: "粮草 +6，神志 -2",
          effect: { axle: 0, grain: 6, sanity: -2 },
          result: "边邑干粮带着甜腥味，能果腹，也让人记不准摊主的脸。"
        }
      ]
    },
    abandoned_pass: {
      id: "abandoned_pass",
      name: "废关",
      region: "人间边境",
      terrain: "market",
      event: "closed_order",
      map: { x: 80, y: 74, step: 1 },
      arrivalText: "塌关横在前方，旧令仍不肯闭眼。",
      detail: "关门塌了一半，旧令仍钉在木上。铜钉和断梁能救车，字缝却像还在拦人。越过此处，就算离开人间边界。",
      sanityDetails: {
        uneasy: "关门塌了一半，旧令却比活人还直。断梁能救车，铜钉能补轴，可字缝里总有一只眼，盯着谁先越界。",
        mad: "关没有塌，是蹲下来了。旧令睁着木头眼，字缝一开一合，念的不是禁令，是队伍里每个人的过关死期。"
      },
      supplyDiscoveryText: "断梁里能拆出好木，钉头带着冷锈。",
      fieldNote: {
        category: "官声",
        subject: "塌关旧令",
        evidence: "关门已塌，禁令仍直钉在木上，像还在替王朝守界。",
        clue: "拓录旧令可补王朝案牍，也会让队伍再次感到被盘查。",
        effect: { axle: 1, grain: 0, sanity: -1 }
      },
      supplies: [
        {
          id: "pass_timbers",
          label: "拆门木补车",
          hint: "车轴 +10，神志 -3",
          effect: { axle: 10, grain: 0, sanity: -3 },
          result: "关门木梁被锯下一截，纹理像被封住的旧路。"
        },
        {
          id: "pass_nails",
          label: "拔关楼铁钉",
          hint: "车轴 +6，粮草 +4，神志 -2",
          effect: { axle: 6, grain: 4, sanity: -2 },
          result: "铁钉从关楼梁骨里拔出，钉头还沾着旧火的黑；墟人识货，愿以干粮换这几枚好钉。"
        }
      ]
    },
    bird_mouse_pass: {
      id: "bird_mouse_pass",
      name: "鸟鼠夹道",
      region: "兽穴山口",
      terrain: "road",
      event: "hollow_pass",
      map: { x: 42, y: 58, step: 2 },
      arrivalText: "山腹细洞贴着车声，夹道只容一车过。",
      detail: "两山夹出一线窄路，洞眼密得像针。白日无声，入夜后满山都在搬粮和碎骨。车过此地，轮声会被山腹学走。",
      sanityDetails: {
        uneasy: "两山夹得很窄，洞眼密得像针。白日无声，入夜后洞里传来搬粮声和碎骨声，车轮每响一下，山腹就学一遍。",
        mad: "山在咀嚼。洞眼全是细小的嘴，白日闭着，夜里开了。你们的轮声被它们吞进去，又从前方吐回来。"
      },
      supplyDiscoveryText: "洞口落着碎粟和旧绳，像谁刚交过路税。",
      fieldNote: {
        category: "异闻",
        subject: "山腹学轮声",
        evidence: "洞眼密如针孔，车轮每响一下，山腹便从前方吐回一遍。",
        clue: "这类异闻可提示山口风险；采录时容易听错自己的队伍人数。",
        effect: { axle: 0, grain: 1, sanity: -2 }
      },
      supplies: [
        {
          id: "burrow_hard_branches",
          label: "拾洞口硬枝",
          hint: "车轴 +5，神志 -2",
          effect: { axle: 5, grain: 0, sanity: -2 },
          result: "硬枝被啃得整齐，正好能作轮楔。"
        },
        {
          id: "burrow_dry_seed",
          label: "收山腹干籽",
          hint: "粮草 +5，神志 -3",
          effect: { axle: 0, grain: 5, sanity: -3 },
          result: "干籽没有霉味，只在袋里轻轻滚动。"
        },
        {
          id: "burrow_blue_feather",
          label: "拾取夹道青羽",
          hint: "神志 -4；得青鸟羽（裂隙神志 -3）",
          effect: { axle: 0, grain: 0, sanity: -4 },
          result: "青羽贴在岩壁上，像有人替你们留了一枚路标；收进车箱时，众人都听见一声很远的鸟鸣。",
          grantsItem: "青鸟羽"
        }
      ]
    },
    nameless_shrine: {
      id: "nameless_shrine",
      name: "无名祠",
      region: "旧道祭所",
      terrain: "road",
      event: "nameless_prayer",
      map: { x: 59, y: 58, step: 2 },
      arrivalText: "无匾小祠伏在岔路旁，香灰像刚被人拨过。",
      detail: "小祠没有匾，香灰却新。灰后有一截短路，也有几道不像人的脚印。",
      sanityDetails: {
        uneasy: "小祠没有匾，香灰却新。灰后短路一会儿近，一会儿远，那几道不像人的脚印总比车队多半步。",
        mad: "祠在路旁，也在路中。香灰新得像刚从喉咙里吐出来，灰面空着一块，正好能供下车队的影子。"
      },
      supplyDiscoveryText: "香灰能压惊，也能显出半截不该在图上的路。",
      fieldNote: {
        category: "民风",
        subject: "无名供位",
        evidence: "小祠无匾，香灰却新，灰后脚印总比车队多半步。",
        clue: "问香灰与供位能稳定人心，但要留下少量粮草作礼。",
        effect: { axle: 0, grain: -1, sanity: 2 }
      },
      supplies: [
        {
          id: "shrine_ash_path",
          label: "献粟问路",
          hint: "神志 +5，粮草 -4",
          effect: { axle: 0, grain: -4, sanity: 5 },
          result: "粟粒落进香灰，灰面显出半截弯路，队伍重新分得清前后。"
        },
        {
          id: "shrine_quiet_charm",
          label: "取灰压惊",
          hint: "神志 +4，车轴 -2",
          effect: { axle: -2, grain: 0, sanity: 4 },
          result: "香灰封入布囊，随从的低语少了些，车轮却压过祠后硬坎。"
        },
        {
          id: "shrine_earth_pouch",
          label: "包一囊祠土",
          hint: "粮草 -2，神志 -2；得息壤囊（抵达 +2 粮）",
          effect: { axle: 0, grain: -2, sanity: -2 },
          result: "祠土沉得不像土。随从说带着它能多撑一站，只是夜里总梦见土在袋中呼吸。",
          grantsItem: "息壤囊"
        }
      ]
    },
    thunder_marsh: {
      id: "thunder_marsh",
      name: "雷泽浅畔",
      region: "泽畔异域",
      terrain: "water",
      event: "ground_thunder",
      map: { x: 76, y: 58, step: 2 },
      arrivalText: "泥下滚过低雷，水面把车队照得很慢。",
      detail: "雷泽水浅，雷声却从泥下滚过。芦根能吃，白羽能引路，断绳提醒车队别在水声里久停。低头看久了，水面会慢半拍。",
      sanityDetails: {
        uneasy: "雷泽水浅，雷却从泥下滚过。水面把人照得慢半拍，像倒影还没决定要不要跟着你们离开。",
        mad: "水在下面打雷，天在泥里喘气。倒影比你们慢半拍，又比你们多一个人；那个人一直低头看车轴。"
      },
      supplyDiscoveryText: "芦根被雷火烤熟一截，白羽下压着可走的浅泥。",
      fieldNote: {
        category: "异闻",
        subject: "泥下低雷",
        evidence: "水浅而雷从泥下滚过，倒影总比真人慢半拍。",
        clue: "采录雷泽水声能辨浅泥，也会让随从怀疑倒影里多出的人。",
        effect: { axle: 0, grain: 1, sanity: -2 }
      },
      supplies: [
        {
          id: "marsh_roots",
          label: "采雷泽芦根",
          hint: "粮草 +10，神志 -3",
          effect: { axle: 0, grain: 10, sanity: -3 },
          result: "芦根能吃，只是咬开时会听见一声很远的闷雷。"
        },
        {
          id: "marsh_fish",
          label: "捞泥下白鱼",
          hint: "粮草 +6，车轴 -3",
          effect: { axle: -3, grain: 6, sanity: 0 },
          result: "白鱼在泥水里一动不动，捞上来后才开始挣扎。"
        },
        {
          id: "marsh_walker_shoes",
          label: "捞起旧步履",
          hint: "车轴 -2，神志 -2；得禹步履（水路车轴 -2）",
          effect: { axle: -2, grain: 0, sanity: -2 },
          result: "一双旧步履缠在芦根上，鞋底刻着治水的旧纹。穿上它，浅泥不再吞轮。",
          grantsItem: "禹步履"
        }
      ]
    },
    white_feather_mire: {
      id: "white_feather_mire",
      name: "白羽淖",
      region: "泽畔异象",
      terrain: "water",
      event: "sunken_feather",
      map: { x: 30, y: 42, step: 3 },
      arrivalText: "白羽沉在水底，重物反倒能从水面走过。",
      detail: "白羽淖的羽毛沉在水底，重物反倒能渡。这里能补粮，也会把羽民渡的方向拖进倒影里。",
      sanityDetails: {
        uneasy: "白羽沉在水底，重物反倒能渡。粮能从水里捞出来，方向也会一起被拖进倒影里。",
        mad: "羽毛都沉下去了，人却浮着。水底有一条白路，路上走着你们的倒影，倒影先到渡口，正回头招手。"
      },
      supplyDiscoveryText: "羽鱼可充饥，沉水芦能束车，只是都带着冷水气。",
      fieldNote: {
        category: "异闻",
        subject: "沉羽白路",
        evidence: "白羽沉在水底，重物反倒能从水面慢慢走过。",
        clue: "记录白羽沉浮可预判水路，但看久了会把方向拖进倒影。",
        effect: { axle: 0, grain: 1, sanity: -2 }
      },
      supplies: [
        {
          id: "mire_feather_fish",
          label: "捞白羽鱼",
          hint: "粮草 +8，神志 -4",
          effect: { axle: 0, grain: 8, sanity: -4 },
          result: "鱼鳞像羽，肉能充饥，眼睛却一直睁着。"
        },
        {
          id: "mire_reed_bundle",
          label: "束沉水芦",
          hint: "车轴 +3，粮草 +3，神志 -3",
          effect: { axle: 3, grain: 3, sanity: -3 },
          result: "沉水芦很韧，捆上车后仍滴着冷水。"
        }
      ]
    },
    feather_folk_ford: {
      id: "feather_folk_ford",
      name: "羽民渡",
      region: "异族渡口",
      terrain: "water",
      event: "feather_ford_debt",
      map: { x: 50, y: 42, step: 3 },
      arrivalText: "渡口没有桥，白羽排在水面上等一笔债。",
      detail: "羽民渡没有桥，白羽压着水面排成路。轻物先过，重物要留下一个名字。",
      sanityDetails: {
        uneasy: "羽民渡没有桥，白羽压着水面排成路。轻物能过，重物要留下一个名字；水面已经替你们空出位置。",
        mad: "桥是羽毛做的，债是名字做的。水面排好白羽，一根一根指向队伍里还没被拿走的人。"
      },
      supplyDiscoveryText: "羽舟轻得像影子，路标却要用粮和名字来换。",
      fieldNote: {
        category: "商路",
        subject: "羽民名债",
        evidence: "轻物先渡，重物要留下一个名字，渡价不只收粮。",
        clue: "采得渡规可帮助后续交易判断，但需以粮礼换取白羽路引。",
        effect: { axle: 0, grain: -1, sanity: 1 }
      },
      supplies: [
        {
          id: "feather_boat",
          label: "以粮换羽舟",
          hint: "车轴 +4，粮草 -7",
          effect: { axle: 4, grain: -7, sanity: 0 },
          result: "羽舟轻得像影子，带车队过了最伤车的一段浅水。"
        },
        {
          id: "feather_names",
          label: "换羽民路标",
          hint: "神志 +4，粮草 -5",
          effect: { axle: 0, grain: -5, sanity: 4 },
          result: "羽民把一枚白羽插在车辕上，水面短暂显出可辨的方向。"
        }
      ]
    },
    black_teeth_market: {
      id: "black_teeth_market",
      name: "黑齿市",
      region: "异族边市",
      terrain: "market",
      event: "black_trade",
      map: { x: 92, y: 58, step: 2 },
      arrivalText: "日中棚影立起，市声却没有一口人声。",
      detail: "黑齿市只在日中立起棚影，摊位无声围成市口。旧铁、黑粟、白羽都能换路，但摊主先看影子，不先看人。价钱常在明日才少。",
      sanityDetails: {
        uneasy: "黑齿市只在日中立起棚影，摊位无声围成市口。摊主先看影子，再看货物；价钱常在明日才从你身上少掉。",
        mad: "市声没有人声，因为人都在影子里。黑齿一笑，价码从明日伸手，先拿走你还没丢的东西。"
      },
      supplyDiscoveryText: "旧铁能换黑粟，白羽能换一句不说出口的路价。",
      fieldNote: {
        category: "商路",
        subject: "黑齿影价",
        evidence: "摊主先看影子再看货物，价钱常在明日才少。",
        clue: "记下影价能帮王朝理解边市规矩，却会让采风册沾上债味。",
        effect: { axle: 0, grain: 1, sanity: -1 }
      },
      supplies: [
        {
          id: "market_trade_grain",
          label: "以旧铁换粮",
          hint: "粮草 +12，车轴 -3",
          effect: { axle: -3, grain: 12, sanity: 0 },
          result: "黑齿市人收走一段旧铁，换来的粮袋沉得出奇。"
        },
        {
          id: "market_sedative",
          label: "买静神药粉",
          hint: "神志 +8，粮草 -5",
          effect: { axle: 0, grain: -5, sanity: 8 },
          result: "药粉苦而清凉，随从们终于能把眼前的影子看回影子。"
        }
      ]
    },
    dream_map_post: {
      id: "dream_map_post",
      name: "梦图驿",
      region: "裂隙前哨",
      terrain: "rift",
      event: "dream_map_gate",
      map: { x: 70, y: 26, step: 4 },
      arrivalText: "梦图在夜里卷起边角，像一扇小门半开着。",
      detail: "梦图驿只在夜里承认自己存在。地图会卷成一扇小门，醒来后门还在纸上。",
      sanityDetails: {
        uneasy: "梦图驿只在夜里承认自己存在。地图卷起一角，像一扇小门；醒来后门还在纸上，门缝里也有车声。",
        mad: "地图睡着了，你们醒在它的梦里。纸边卷成门，门后不是屋，是另一张还没画完的九州。"
      },
      supplyDiscoveryText: "残图能定方位，也会偷走醒来后的一小段路。",
      fieldNote: {
        category: "谶兆",
        subject: "梦图纸门",
        evidence: "地图在夜里卷成一扇门，醒后门缝仍留在纸上。",
        clue: "梦中采得的路向可指向裂隙，也可能混淆来路。",
        effect: { axle: 0, grain: 0, sanity: 1 }
      },
      supplies: [
        {
          id: "dream_map_bundle",
          label: "整束梦图",
          hint: "神志 +7，粮草 -4",
          effect: { axle: 0, grain: -4, sanity: 7 },
          result: "残图被绳重新束住，队伍短暂确认了裂隙前的方位。"
        },
        {
          id: "dream_axle_rest",
          label: "贴图歇轴",
          hint: "车轴 +3，神志 -3",
          effect: { axle: 3, grain: 0, sanity: -3 },
          result: "车轴在梦图阴影里冷却下来，只是醒后每个人都少记一小段路。"
        },
        {
          id: "dream_post_rations",
          label: "取梦驿余粮",
          hint: "粮草 +6，神志 -4",
          effect: { axle: 0, grain: 6, sanity: -4 },
          result: "驿柜里还剩半袋粟，袋口写着你们的名字；取走时，那行字淡了一点。"
        }
      ]
    },
    red_marsh: {
      id: "red_marsh",
      name: "赤水外滩",
      region: "大荒边缘",
      terrain: "water",
      event: "red_bones",
      map: { x: 70, y: 42, step: 3 },
      arrivalText: "赤水不响，岸骨却排出一段浅路。",
      detail: "赤水不急不响，红得像一直在记账。岸骨白日是残骸，夜里会排成浅路。车队若沿骨前行，就要少相信一点自己。",
      sanityDetails: {
        uneasy: "赤水不急不响，红得像一直在记账。岸骨白日是残骸，夜里会排成浅路，像有人用旧死者替你们搭桥。",
        mad: "赤水在纸背流。岸骨排成路，又拆成字；你们每走一段，就有一根骨头在账上写下一个名字。"
      },
      supplyDiscoveryText: "骨边结着盐霜，可保粮，也会让手心发红。",
      fieldNote: {
        category: "灾情",
        subject: "赤水骨账",
        evidence: "岸骨白日是残骸，夜里排成浅路，像替活人记账。",
        clue: "灾情条目能解释赤水禁忌，但采录越细，越像在替骨头点名。",
        effect: { axle: 0, grain: 2, sanity: -3 }
      },
      supplies: [
        {
          id: "red_shoregrass",
          label: "采岸草充饥",
          hint: "粮草 +7，神志 -5",
          effect: { axle: 0, grain: 7, sanity: -5 },
          result: "岸草能煮成糊，颜色却总带一点洗不掉的红。"
        }
      ]
    },
    broken_stele: {
      id: "broken_stele",
      name: "巫咸断碑",
      region: "巫文界标",
      terrain: "road",
      event: "read_name",
      map: { x: 90, y: 42, step: 3 },
      arrivalText: "断碑露出残笔，像方位，也像人名。",
      detail: "断碑半埋黑土，残笔像方位，也像人名。拓下它能稳住西路，看久了却觉得缺的那一笔落在自己身上。碑后风声很低，像有人点名。",
      sanityDetails: {
        uneasy: "断碑半埋黑土，残笔像方位，也像人名。缺的那一笔总落在眼角，碑后风声很低，像有人点到你又停住。",
        mad: "碑不是缺字。碑在等你把名字还给它。每读一笔，车队少一日；每拓一痕，影子少一截。"
      },
      supplyDiscoveryText: "碑下压着旧炭和拓纸，纸背还留着半截路名。",
      fieldNote: {
        category: "谶兆",
        subject: "巫咸缺笔",
        evidence: "断碑残笔既像方位，也像人名，缺的一笔总落在眼角。",
        clue: "拓碑可稳定西路判断，代价是要反复确认自己的名字。",
        effect: { axle: 0, grain: -1, sanity: 2 }
      },
      supplies: [
        {
          id: "stele_rubbing",
          label: "拓碑定方",
          hint: "神志 +5，粮草 -2",
          effect: { axle: 0, grain: -2, sanity: 5 },
          result: "拓片补齐了几处方位，队伍重新确认自己仍在往西。"
        },
        {
          id: "stele_chant",
          label: "依碑文正名",
          hint: "神志 +6，车轴 -2",
          effect: { axle: -2, grain: 0, sanity: 6 },
          result: "随从按碑文重新叫出彼此的名字，队伍短暂地记起自己是谁。"
        },
        {
          id: "stele_grain_offering",
          label: "以拓片换粮",
          hint: "粮草 +6，神志 -4",
          effect: { axle: 0, grain: 6, sanity: -4 },
          result: "守碑人收下拓片，换给你们半袋陈粟；他说碑上的名字少一个，粮就多一分。"
        }
      ]
    },
    kyushu_rift: {
      id: "kyushu_rift",
      name: "九州裂隙",
      region: "地图尽头",
      terrain: "rift",
      event: "rift_dream",
      map: { x: 91, y: 10, step: 5 },
      arrivalText: "舆图在这里折错，九州从纸背裂开一道暗缝。",
      detail: "九州裂隙不是城也不是山口，只是舆图折错后的破痕。车队到这里时，来路和去路都会变薄。",
      sanityDetails: {
        uneasy: "九州裂隙不是城也不是山口，只是舆图折错后的破痕。来路和去路都变薄，像再走一步就会被纸背看见。",
        mad: "图尽了。路还在。裂隙从纸背睁开，里面没有远方，只有车队所有没有发生的归程。"
      },
      supplyDiscoveryText: "残图被重新束紧，裂隙短暂像一条还能命名的路。",
      fieldNote: {
        category: "谶兆",
        subject: "纸背裂缝",
        evidence: "舆图在此折错，来路和去路都变薄，像被纸背看见。",
        clue: "终点采风不再给出答案，只把此前所有写法推向判词。",
        effect: { axle: 0, grain: 0, sanity: -2 }
      },
      supplies: [
        {
          id: "rift_map",
          label: "整束残图",
          hint: "神志 +8，粮草 -4",
          effect: { axle: 0, grain: -4, sanity: 8 },
          result: "残图被重新束好，至少有一瞬间，裂隙看起来像可以被理解的路。"
        }
      ]
    },
    shaxu: {
      id: "shaxu",
      name: "沙墟",
      region: "西北赤碛",
      terrain: "road",
      event: "shaxu_well",
      generatedArt: false,
      map: { x: 8, y: 58, step: 2 },
      arrivalText: "沙丘把官道淹到只剩一线，风里有古河道的水声。",
      detail: "沙墟千里赤碛，白日热浪如潮，夜里沙粒低吟。沙下埋着古河道与枯死的胡杨，流沙氏的沙帐随水草迁徙。这里没有城墙，也没有仓廪，只有烽沙火与一瓢水。",
      sanityDetails: {
        uneasy: "沙丘在夜里换位置，白日的路标全被埋了。风从沙下过，像有人拖着空水囊走。",
        mad: "沙下有人在数你们的水囊。数到最后一囊，沙丘自己让开一条路，路尽头还是沙。"
      },
      supplyDiscoveryText: "枯胡杨根下压着湿沙，古河道的水还能滤出半囊。",
      fieldNote: {
        category: "地风",
        subject: "烽沙火与古河道",
        evidence: "沙下古河道仍能出水，流沙氏以烽沙火为驼队引路。",
        clue: "沙墟的路随沙丘移动，只有水与火光能作准。",
        effect: { axle: 0, grain: 1, sanity: -1 }
      },
      supplies: [
        { id: "shaxu_water", label: "取古河道水", hint: "粮草 +9，神志 -2", effect: { axle: 0, grain: 9, sanity: -2 }, result: "你们挖开湿沙，滤出半囊浑水。水有土味，却让队伍重新坐直。" },
        { id: "shaxu_repair", label: "借胡杨根修轴", hint: "车轴 +6，粮草 -2", effect: { axle: 6, grain: -2, sanity: 0 }, result: "枯胡杨的根比铁还韧，削成轮楔后，车轴重新咬住沙路。" }
      ]
    },
    xuansu: {
      id: "xuansu",
      name: "玄素山",
      region: "西南雪境",
      terrain: "road",
      event: "xuansu_ice",
      generatedArt: false,
      map: { x: 25, y: 58, step: 2 },
      arrivalText: "雪线压在车顶，冰道在雾凇林后泛着蓝光。",
      detail: "玄素山群峰覆雪，冰川横亘，山腰冰窟垂着万年冰锥。玄冰氏凿岩为室，以鱼骨为契，驯雪鹫越谷。冬至凿冰祭时，外人须闭目静立一炷香。",
      sanityDetails: {
        uneasy: "冰道上的车辙只有去程，没有回程。雾凇林里偶尔传来碎玉声，像有人在后面跟着折枝。",
        mad: "天池把你们的声音存起来，过很久才还回来。还回来的那一声，比你们多一个人。"
      },
      supplyDiscoveryText: "冰窟里有冻鱼与旧轴箍，玄冰氏留给了下一个过路人。",
      fieldNote: {
        category: "异闻",
        subject: "鱼骨契与凿冰祭",
        evidence: "玄冰氏以鱼骨刻契记事，冬至以冰晶还归天池。",
        clue: "雪境的路靠鱼骨契与冰道维持，铁器比钱更管用。",
        effect: { axle: 1, grain: -1, sanity: 0 }
      },
      supplies: [
        { id: "xuansu_fish", label: "取冻鱼", hint: "粮草 +6，车轴 -2", effect: { axle: -2, grain: 6, sanity: 0 }, result: "冻鱼硬得像木头，敲开分食后，队伍终于有了热气。" },
        { id: "xuansu_axle", label: "换一副冰轴箍", hint: "车轴 +7，粮草 -3", effect: { axle: 7, grain: -3, sanity: 0 }, result: "玄冰氏收下粮，替你们箍紧车轴。冰道上的轮声一下子变轻。" }
      ]
    }
  },
  routes: [
    {
      id: "central_to_road",
      from: "central_post",
      to: "old_king_road",
      name: "循旧王道西行",
      nameShort: "沿旧王道向西缓行",
      terrain: "road",
      risk: "低",
      cost: { axle: -4, grain: -4, sanity: 0 },
      hint: "直道尚平，适合作为教程段。",
      hintShort: "直道尚平少些惊扰",
      lowSanityHint: "车辙记得回头路声",
      midEvent: "dang_kang_field_cry"
    },
    {
      id: "central_to_pass",
      from: "central_post",
      to: "abandoned_pass",
      name: "绕向废关",
      nameShort: "绕向废关穿旧令西行",
      terrain: "market",
      risk: "中",
      cost: { axle: -6, grain: -5, sanity: -3 },
      hint: "关墙仍在，但方向标残缺。",
      hintShort: "关墙残缺伤神志较重",
      lowSanityHint: "门额在数车轮声一遍",
      midEvent: "roadside_shrine",
      midEventPool: ["roadside_shrine", "rnd_pass_seal_ledger"],
    },
    {
      id: "central_to_qingqiu",
      from: "central_post",
      to: "qingqiu_outer_city",
      name: "借狐灯西行",
      nameShort: "借狐灯穿过边邑西行",
      terrain: "market",
      risk: "低",
      cost: { axle: -5, grain: -5, sanity: -2 },
      hint: "边邑仍有灯火，可稳神志但少修车料。",
      hintShort: "灯火稳心少车料可取",
      lowSanityHint: "灯像眼也像旧路口",
      midEvent: "fox_lamp_tail",
      midEventPool: ["fox_lamp_tail", "rnd_qingqiu_mask"],
      midEventPool: ["fox_lamp_tail", "rnd_qingqiu_tail", "rnd_qingqiu_mask"],
    },
    {
      id: "road_to_marsh",
      from: "old_king_road",
      to: "thunder_marsh",
      name: "车辙入泽",
      nameShort: "顺深车辙驶入雷泽",
      terrain: "water",
      risk: "中",
      cost: { axle: -8, grain: -6, sanity: -4 },
      hint: "泥黑而浅，雷声贴地。",
      hintShort: "泥浅有雷易伤车轴",
      lowSanityHint: "泥下先听见车声回来",
      midEvent: "wenao_fish_rain",
      midEventPool: ["wenao_fish_rain", "rnd_marsh_drum_rest", "rnd_oldroad_milepost"],
    },
    {
      id: "road_to_pass",
      from: "old_king_road",
      to: "abandoned_pass",
      name: "沿旧令入关",
      terrain: "market",
      risk: "低",
      cost: { axle: -5, grain: -4, sanity: -2 },
      hint: "旧令禁止西行，字还清楚。",
      midEvent: "roadside_shrine",
      midEventPool: ["roadside_shrine", "rnd_pass_seal", "rnd_pass_toll"],
    },
    {
      id: "road_to_shrine",
      from: "old_king_road",
      to: "nameless_shrine",
      name: "循车辙见小祠",
      terrain: "road",
      risk: "低",
      cost: { axle: -3, grain: -4, sanity: -2 },
      hint: "旧道旁有新香灰，可问路但要耗粮。",
      midEvent: "dang_kang_field_cry",
      midEventPool: ["dang_kang_field_cry", "rnd_oldroad_milepost", "rnd_shrine_back_road", "rnd_shrine_bell"],
    },
    {
      id: "road_to_birdmouse",
      from: "old_king_road",
      to: "bird_mouse_pass",
      name: "贴山入夹道",
      nameShort: "贴山影进入鸟鼠夹道",
      terrain: "road",
      risk: "中",
      cost: { axle: -6, grain: -4, sanity: -4 },
      hint: "山隘少耗粮，洞声会磨神志。",
      hintShort: "少耗粮草但夜声重",
      lowSanityHint: "洞声贴着车底走动",
      midEvent: "wheel_omen",
      midEventPool: ["wheel_omen", "rnd_burrow_clay_echo", "rnd_ridge_wind"],
    },
    {
      id: "qingqiu_to_road",
      from: "qingqiu_outer_city",
      to: "old_king_road",
      name: "持灯回王道",
      terrain: "road",
      risk: "低",
      cost: { axle: -4, grain: -5, sanity: -1 },
      hint: "狐灯照回车辙，路稳但绕。",
      midEvent: "fox_lamp_tail",
      midEventPool: ["fox_lamp_tail", "rnd_qingqiu_tail", "rnd_qingqiu_mask", "rnd_qingqiu_lamp_moth"],
    },
    {
      id: "qingqiu_to_shrine",
      from: "qingqiu_outer_city",
      to: "nameless_shrine",
      name: "绕灯影寻祠",
      terrain: "road",
      risk: "中",
      cost: { axle: -4, grain: -5, sanity: -3 },
      hint: "边邑路引指向无匾小祠。",
      midEvent: "zhu_bird_name_call",
    },
    {
      id: "pass_to_market",
      from: "abandoned_pass",
      to: "black_teeth_market",
      name: "日中入市",
      terrain: "market",
      risk: "中",
      cost: { axle: -4, grain: -7, sanity: -6 },
      hint: "粮草或许能换，但价格未必是粮。",
      midEvent: "black_teeth_scale_price",
      midEventPool: ["black_teeth_scale_price", "rnd_market_bone_coin", "rnd_market_scale"],
    },
    {
      id: "pass_to_birdmouse",
      from: "abandoned_pass",
      to: "bird_mouse_pass",
      name: "沿关墙入夹道",
      terrain: "road",
      risk: "中",
      cost: { axle: -4, grain: -4, sanity: -5 },
      hint: "旧关后是窄山口，车能过，人会听见太多夜声。",
      midEvent: "wheel_omen",
      midEventPool: ["wheel_omen", "rnd_burrow_clay_echo", "rnd_burrow_eggs"],
    },
    {
      id: "shrine_to_marsh",
      from: "nameless_shrine",
      to: "thunder_marsh",
      name: "沿灰路入泽",
      terrain: "water",
      risk: "中",
      cost: { axle: -5, grain: -6, sanity: -3 },
      hint: "香灰指向泽畔，粮草会湿。",
      midEvent: "mirror_reed_bed",
      midEventPool: ["mirror_reed_bed", "rnd_red_bone_market", "rnd_mire_sunken_bell"]
    },
    {
      id: "shrine_to_market",
      from: "nameless_shrine",
      to: "black_teeth_market",
      name: "按空名入市",
      terrain: "market",
      risk: "中",
      cost: { axle: -4, grain: -7, sanity: -5 },
      hint: "祠中空名可换市口方向。",
      midEvent: "zhu_bird_name_call",
      midEventPool: ["zhu_bird_name_call", "rnd_shrine_back_road", "rnd_shrine_bell"],
    },
    {
      id: "birdmouse_to_marsh",
      from: "bird_mouse_pass",
      to: "thunder_marsh",
      name: "循山腹水声",
      terrain: "water",
      risk: "中",
      cost: { axle: -6, grain: -4, sanity: -5 },
      hint: "洞声转成水声，雷泽在山后。",
      midEvent: "ming_snake_crosswind"
    },
    {
      id: "birdmouse_to_market",
      from: "bird_mouse_pass",
      to: "black_teeth_market",
      name: "过洞影入市",
      terrain: "market",
      risk: "中",
      cost: { axle: -5, grain: -5, sanity: -5 },
      hint: "山口另一侧有日中市影。",
      midEvent: "black_teeth_scale_price",
      midEventPool: ["black_teeth_scale_price", "rnd_black_scale_debt", "rnd_market_eye_price", "rnd_market_teeth"],
    },
    {
      id: "birdmouse_to_mire",
      from: "bird_mouse_pass",
      to: "white_feather_mire",
      name: "听空穴至白淖",
      terrain: "water",
      risk: "高",
      cost: { axle: -6, grain: -5, sanity: -6 },
      hint: "空穴里的羽声指向沉水白羽。",
      midEvent: "mirror_reed_bed",
      midEventPool: ["mirror_reed_bed", "rnd_burrow_wind", "rnd_burrow_eggs"],
    },
    {
      id: "marsh_to_red",
      from: "thunder_marsh",
      to: "red_marsh",
      name: "沿羽落处南行",
      terrain: "water",
      risk: "高",
      cost: { axle: -10, grain: -8, sanity: -9 },
      hint: "水色变暗，芦苇高过车盖。",
      midEvent: "ming_snake_crosswind",
      midEventPool: ["ming_snake_crosswind", "rnd_red_backflow", "rnd_red_bone_market"],
    },
    {
      id: "marsh_to_feather",
      from: "thunder_marsh",
      to: "feather_folk_ford",
      name: "随白羽找渡",
      terrain: "water",
      risk: "中",
      cost: { axle: -6, grain: -6, sanity: -5 },
      hint: "白羽沉在浅淖里，渡口不远。",
      midEvent: "xuan_gui_shell_bridge"
    },
    {
      id: "thunder_to_mire",
      from: "thunder_marsh",
      to: "white_feather_mire",
      name: "沿沉羽入淖",
      nameShort: "沿沉羽痕驶入白淖",
      terrain: "water",
      risk: "中",
      cost: { axle: -6, grain: -5, sanity: -5 },
      hint: "雷泽边缘漂着白羽，粮草可补，神志承压。",
      hintShort: "可补粮草心神不稳",
      lowSanityHint: "白羽在水下发亮了",
      midEvent: "mirror_reed_bed",
      midEventPool: ["mirror_reed_bed", "rnd_marsh_drum_rest", "rnd_mire_sunken_bell"],
    },
    {
      id: "market_to_stele",
      from: "black_teeth_market",
      to: "broken_stele",
      name: "以旧物换碑路",
      terrain: "road",
      risk: "中",
      cost: { axle: -5, grain: -6, sanity: -9 },
      hint: "市人指向一块不像文字的碑。",
      midEvent: "black_teeth_scale_price",
      midEventPool: ["black_teeth_scale_price", "rnd_stele_names", "rnd_black_scale_debt"],
    },
    {
      id: "market_to_feather",
      from: "black_teeth_market",
      to: "feather_folk_ford",
      name: "买羽寻渡",
      terrain: "water",
      risk: "中",
      cost: { axle: -5, grain: -8, sanity: -4 },
      hint: "粮袋变轻，水路却少伤车轴。",
      midEvent: "xuan_gui_shell_bridge",
      midEventPool: ["xuan_gui_shell_bridge", "rnd_feather_roll_call", "rnd_black_scale_debt", "rnd_market_eye_price"],
    },
    {
      id: "market_to_mire",
      from: "black_teeth_market",
      to: "white_feather_mire",
      name: "循白羽货价入淖",
      nameShort: "循白羽价驶入浅淖",
      terrain: "water",
      risk: "中",
      cost: { axle: -5, grain: -7, sanity: -5 },
      hint: "市人给出的白羽价，指向一片倒着浮的浅水。",
      hintShort: "倒水浅处还能补给",
      lowSanityHint: "价码浮在水下面了",
      midEvent: "mirror_reed_bed",
      midEventPool: ["mirror_reed_bed", "rnd_market_scale", "rnd_market_bone_coin"],
    },
    {
      id: "red_to_rift",
      from: "red_marsh",
      to: "kyushu_rift",
      name: "夜近裂隙",
      nameShort: "夜沿岸骨靠近裂隙",
      terrain: "rift",
      risk: "高",
      cost: { axle: -12, grain: -9, sanity: -14 },
      hint: "白日无路，低神志者说看见浅滩。",
      hintShort: "锁路高压直抵裂隙",
      lowSanityHint: "浅滩只给低神志者",
      requireAny: [
        { flag: "followed_bones" },
        { flag: "rift_name" },
        { sanityMax: 34 }
      ],
      lockedHint: "需沿骨行路、读出裂隙名，或神志低至能看见幻路。",
      lockedHintShort: "还缺骨路或裂隙名"
    },
    {
      id: "red_to_dream",
      from: "red_marsh",
      to: "dream_map_post",
      name: "沿红雾入梦图",
      terrain: "rift",
      risk: "高",
      cost: { axle: -8, grain: -7, sanity: -10 },
      hint: "避开直抵裂隙的浅滩，先找梦图前哨。",
      midEvent: "dream_cicada_shell",
      midEventPool: ["dream_cicada_shell", "rnd_red_backflow", "rnd_dream_toll", "rnd_dream_ink_rain"],
    },
    {
      id: "red_to_stele",
      from: "red_marsh",
      to: "broken_stele",
      name: "退往断碑",
      nameShort: "离赤水岸退往断碑",
      terrain: "road",
      risk: "中",
      cost: { axle: -7, grain: -6, sanity: -4 },
      hint: "离开赤水，寻找能解释骨路的文字。",
      hintShort: "退离赤水寻找文字",
      lowSanityHint: "骨路后面藏着残笔",
      midEvent: "bone_ox_rut",
      midEventPool: ["bone_ox_rut", "rnd_stele_names", "rnd_red_backflow", "rnd_red_bone_market"],
    },
    {
      id: "stele_to_rift",
      from: "broken_stele",
      to: "kyushu_rift",
      name: "照碑文西去",
      nameShort: "照断碑文驶向裂隙",
      terrain: "rift",
      risk: "高",
      cost: { axle: -10, grain: -9, sanity: -16 },
      hint: "碑文像在补全地图。",
      hintShort: "高压前进路线已定",
      lowSanityHint: "碑文替地图补口了"
    },
    {
      id: "stele_to_dream",
      from: "broken_stele",
      to: "dream_map_post",
      name: "拓碑入梦驿",
      terrain: "rift",
      risk: "中",
      cost: { axle: -5, grain: -6, sanity: -6 },
      hint: "碑文没有直指裂隙，而是指向一处会卷起的图。",
      midEvent: "bone_ox_rut",
      midEventPool: ["bone_ox_rut", "rnd_stele_names", "rnd_stele_ink_well", "rnd_stele_echo"],
    },
    {
      id: "market_to_red",
      from: "black_teeth_market",
      to: "red_marsh",
      name: "买羽渡泽",
      terrain: "water",
      risk: "高",
      cost: { axle: -7, grain: -11, sanity: -8 },
      hint: "交易省车轴，耗粮草。",
      midEvent: "black_cloud"
    },
    {
      id: "mire_to_feather",
      from: "white_feather_mire",
      to: "feather_folk_ford",
      name: "随沉羽找渡",
      nameShort: "随沉羽影找到渡口",
      terrain: "water",
      risk: "中",
      cost: { axle: -4, grain: -6, sanity: -5 },
      hint: "白羽沉处能找到羽民渡的浅水。",
      hintShort: "浅水可过要耗粮草",
      lowSanityHint: "渡口在水下眨眼了",
      midEvent: "xuan_gui_shell_bridge",
      midEventPool: ["xuan_gui_shell_bridge", "rnd_feather_roll_call", "rnd_mire_feather_toll", "rnd_mire_feather"],
    },
    {
      id: "mire_to_red",
      from: "white_feather_mire",
      to: "red_marsh",
      name: "沿反照近赤水",
      terrain: "water",
      risk: "高",
      cost: { axle: -7, grain: -7, sanity: -9 },
      hint: "倒影尽头泛红，是更高压的禁地。",
      midEvent: "mirror_reed_bed",
      midEventPool: ["mirror_reed_bed", "rnd_red_bone_market", "rnd_mire_sunken_bell", "rnd_red_backflow"],
    },
    {
      id: "feather_to_red",
      from: "feather_folk_ford",
      to: "red_marsh",
      name: "弃名近赤水",
      terrain: "water",
      risk: "高",
      cost: { axle: -6, grain: -8, sanity: -8 },
      hint: "水路省车，却把队伍推向禁地。"
    },
    {
      id: "feather_to_dream",
      from: "feather_folk_ford",
      to: "dream_map_post",
      name: "羽落入梦图",
      terrain: "rift",
      risk: "高",
      cost: { axle: -5, grain: -5, sanity: -11 },
      hint: "羽民说轻物能先抵达梦里。",
      midEvent: "dream_cicada_shell",
      midEventPool: ["dream_cicada_shell", "rnd_feather_roll_call", "rnd_dream_toll", "rnd_dream_ink_rain"],
    },
    {
      id: "dream_to_rift",
      from: "dream_map_post",
      to: "kyushu_rift",
      name: "照梦门抵裂",
      nameShort: "照梦门缝抵达裂口",
      terrain: "rift",
      risk: "高",
      cost: { axle: -8, grain: -4, sanity: -15 },
      hint: "梦图前哨后的最后一段路，能走，但不会像现实。",
      hintShort: "最后一段不像现实",
      lowSanityHint: "门后不是人间旧路"
    },
    {
      id: "road_to_shaxu",
      from: "nameless_shrine",
      to: "shaxu",
      name: "循香灰入沙墟",
      terrain: "road",
      risk: "中",
      cost: { axle: -7, grain: -8, sanity: -4 },
      hint: "枯胡杨指向沙下古河道，水与粮都在沙里。"
    },
    {
      id: "shaxu_to_stele",
      from: "shaxu",
      to: "broken_stele",
      name: "出沙墟抵断碑",
      terrain: "road",
      risk: "中",
      cost: { axle: -6, grain: -7, sanity: -6 },
      hint: "沙路尽头立着巫咸断碑，碑后才是回程。"
    },
    {
      id: "pass_to_xuansu",
      from: "abandoned_pass",
      to: "xuansu",
      name: "越关墙入雪境",
      terrain: "road",
      risk: "高",
      cost: { axle: -8, grain: -6, sanity: -5 },
      hint: "关墙外就是雪线，冰道只认鱼骨契。"
    },
    {
      id: "xuansu_to_birdmouse",
      from: "xuansu",
      to: "bird_mouse_pass",
      name: "下雪线入夹道",
      terrain: "road",
      risk: "中",
      cost: { axle: -7, grain: -7, sanity: -5 },
      hint: "雪水汇进山腹，鸟鼠夹道在后山接住车队。"
    }
  ],
  revealPlan: {
    central_post: {
      routes: ["central_to_road", "central_to_pass", "central_to_qingqiu"],
      fogLocations: ["thunder_marsh", "bird_mouse_pass", "nameless_shrine"],
      fogRoutes: ["road_to_marsh", "road_to_birdmouse", "qingqiu_to_shrine"],
      revealText: "驿外旧图吸了潮，西边三道朱砂线先浮出来。",
      revealTextShort: "朱砂线浮出三道",
      lowSanityRevealText: "墨线比路先动起来"
    },
    old_king_road: {
      routes: ["road_to_marsh", "road_to_pass", "road_to_shrine", "road_to_birdmouse"],
      fogLocations: ["red_marsh", "bird_mouse_pass", "white_feather_mire"],
      fogRoutes: ["marsh_to_red", "birdmouse_to_mire", "thunder_to_mire"],
      revealText: "故王道的车辙向两侧分开，泽气在远处压住纸面。",
      revealTextShort: "车辙分开，泽气压纸"
    },
    qingqiu_outer_city: {
      routes: ["qingqiu_to_road", "qingqiu_to_shrine"],
      fogLocations: ["old_king_road", "nameless_shrine", "black_teeth_market"],
      fogRoutes: ["road_to_marsh", "shrine_to_market"],
      revealText: "狐灯沿纸纹排开，照出回王道与绕祠两条小路。",
      revealTextShort: "狐灯照出两条小路"
    },
    abandoned_pass: {
      routes: ["pass_to_market", "pass_to_birdmouse", "pass_to_xuansu"],
      fogLocations: ["black_teeth_market", "bird_mouse_pass", "white_feather_mire"],
      fogRoutes: ["market_to_stele", "birdmouse_to_mire", "market_to_mire"],
      revealText: "废关门额下的旧令松动，日中市影从雾里露出边角。",
      revealTextShort: "旧令松动，市影露角"
    },
    bird_mouse_pass: {
      routes: ["birdmouse_to_marsh", "birdmouse_to_market", "birdmouse_to_mire"],
      fogLocations: ["thunder_marsh", "black_teeth_market", "white_feather_mire"],
      fogRoutes: ["thunder_to_mire", "market_to_mire", "mire_to_red"],
      revealText: "两山夹出一线窄路，洞口像针眼一样浮在纸上。",
      revealTextShort: "夹道在纸上收窄"
    },
    nameless_shrine: {
      routes: ["shrine_to_marsh", "shrine_to_market", "road_to_shaxu"],
      fogLocations: ["thunder_marsh", "black_teeth_market", "white_feather_mire"],
      fogRoutes: ["thunder_to_mire", "market_to_mire"],
      revealText: "香灰在图上散开，一半落向泽畔，一半落向市影。",
      revealTextShort: "香灰分向泽畔与市口"
    },
    thunder_marsh: {
      routes: ["marsh_to_red", "marsh_to_feather", "thunder_to_mire"],
      fogLocations: ["red_marsh", "white_feather_mire", "feather_folk_ford"],
      fogRoutes: ["mire_to_feather", "mire_to_red", "feather_to_dream"],
      revealText: "雷声从纸背滚过，赤水方向被淡墨勾出一截。",
      revealTextShort: "纸背滚雷，赤水现线"
    },
    black_teeth_market: {
      routes: ["market_to_stele", "market_to_red", "market_to_feather", "market_to_mire"],
      fogLocations: ["broken_stele", "red_marsh", "white_feather_mire"],
      fogRoutes: ["stele_to_dream", "mire_to_red", "mire_to_feather"],
      revealText: "黑齿市人收起摊布，换来的不是路，而是两枚方向。",
      revealTextShort: "摊布收起，两路定价"
    },
    white_feather_mire: {
      routes: ["mire_to_feather", "mire_to_red"],
      fogLocations: ["feather_folk_ford", "red_marsh", "dream_map_post"],
      fogRoutes: ["feather_to_dream", "red_to_dream", "dream_to_rift"],
      revealText: "浅淖漂出一圈白羽，羽民渡的方向在水下闪了一下。",
      revealTextShort: "白羽沉下，渡向闪现"
    },
    feather_folk_ford: {
      routes: ["feather_to_red", "feather_to_dream"],
      fogLocations: ["red_marsh", "dream_map_post", "kyushu_rift"],
      fogRoutes: ["red_to_rift", "dream_to_rift"],
      revealText: "白羽在水面排成轻桥，赤水与梦图前哨同时浮出。",
      revealTextShort: "白羽压水成轻桥"
    },
    red_marsh: {
      routes: ["red_to_rift", "red_to_stele", "red_to_dream"],
      fogLocations: ["broken_stele", "dream_map_post", "kyushu_rift"],
      fogRoutes: ["stele_to_rift", "dream_to_rift"],
      revealText: "赤水在图上渗开，裂隙破痕隔着一层红雾显出。",
      revealTextShort: "赤水渗开，裂痕隔雾",
      lowSanityRevealText: "红水先于地图醒来"
    },
    broken_stele: {
      routes: ["stele_to_rift", "stele_to_dream"],
      fogLocations: ["dream_map_post", "kyushu_rift"],
      fogRoutes: ["dream_to_rift"],
      revealText: "断碑残笔补上西向，裂隙的位置终于不再游移。",
      revealTextShort: "残笔补西，裂隙定住"
    },
    dream_map_post: {
      routes: ["dream_to_rift"],
      fogLocations: ["kyushu_rift"],
      fogRoutes: [],
      revealText: "梦图驿把地图重新卷起，卷口正对裂隙破痕。",
      revealTextShort: "梦图卷口正对裂痕"
    },
    kyushu_rift: {
      routes: [],
      fogLocations: [],
      fogRoutes: [],
      revealText: "地图在裂隙前合拢，远处已无普通道路。",
      revealTextShort: "地图合拢，路到尽处"
    },
    shaxu: {
      routes: ["shaxu_to_stele"],
      fogLocations: ["broken_stele"],
      fogRoutes: ["stele_to_rift"],
      revealText: "沙丘退开一线，断碑在热浪里露出半截。",
      revealTextShort: "沙退碑现"
    },
    xuansu: {
      routes: ["xuansu_to_birdmouse"],
      fogLocations: ["bird_mouse_pass"],
      fogRoutes: ["birdmouse_to_mire"],
      revealText: "雪线下露出山腹旧道，鸟鼠声从另一头传来。",
      revealTextShort: "雪线让道"
    }
  },
  routePools: {
    central_post: {
      requiredRoutes: ["central_to_road"],
      optionalRoutes: [
        { id: "central_to_pass", weight: 35, tags: ["axle_rescue", "side"] },
        { id: "central_to_qingqiu", weight: 35, tags: ["grain_rescue", "sanity_rescue", "side"] }
      ],
      optionalCount: 1,
      fogPool: [
        { type: "location", id: "thunder_marsh", weight: 35, tags: ["grain_rescue"] },
        { type: "location", id: "bird_mouse_pass", weight: 25, tags: ["axle_rescue"] },
        { type: "location", id: "nameless_shrine", weight: 25, tags: ["sanity_rescue"] },
        { type: "route", id: "road_to_birdmouse", weight: 20, tags: ["side"] }
      ],
      fogCount: { min: 2, max: 3 },
      rescueTags: ["axle_rescue", "grain_rescue", "sanity_rescue"]
    },
    old_king_road: {
      requiredRoutes: ["road_to_marsh"],
      optionalRoutes: [
        { id: "road_to_pass", weight: 35, tags: ["axle_rescue", "low_risk"] },
        { id: "road_to_shrine", weight: 35, tags: ["sanity_rescue", "low_risk"] },
        { id: "road_to_birdmouse", weight: 30, tags: ["axle_rescue", "side"] }
      ],
      optionalCount: 2,
      fogPool: [
        { type: "location", id: "red_marsh", weight: 35, tags: ["core"] },
        { type: "location", id: "white_feather_mire", weight: 30, tags: ["grain_rescue"] },
        { type: "location", id: "bird_mouse_pass", weight: 25, tags: ["axle_rescue"] },
        { type: "route", id: "marsh_to_red", weight: 25, tags: ["core"] },
        { type: "route", id: "thunder_to_mire", weight: 25, tags: ["grain_rescue"] }
      ],
      fogCount: { min: 2, max: 3 },
      rescueTags: ["axle_rescue", "grain_rescue", "sanity_rescue"]
    },
    qingqiu_outer_city: {
      requiredRoutes: ["qingqiu_to_road"],
      optionalRoutes: [
        { id: "qingqiu_to_shrine", weight: 35, tags: ["sanity_rescue", "side"] }
      ],
      optionalCount: 1,
      fogPool: [
        { type: "location", id: "old_king_road", weight: 25, tags: ["core"] },
        { type: "location", id: "nameless_shrine", weight: 30, tags: ["sanity_rescue"] },
        { type: "location", id: "black_teeth_market", weight: 25, tags: ["grain_rescue", "sanity_rescue"] },
        { type: "route", id: "shrine_to_market", weight: 20, tags: ["side"] }
      ],
      fogCount: { min: 1, max: 2 },
      rescueTags: ["grain_rescue", "sanity_rescue"]
    },
    abandoned_pass: {
      requiredRoutes: ["pass_to_market", "pass_to_xuansu"],
      optionalRoutes: [
        { id: "pass_to_birdmouse", weight: 35, tags: ["axle_rescue", "side"] }
      ],
      optionalCount: 1,
      fogPool: [
        { type: "location", id: "black_teeth_market", weight: 30, tags: ["grain_rescue", "sanity_rescue"] },
        { type: "location", id: "bird_mouse_pass", weight: 30, tags: ["axle_rescue"] },
        { type: "location", id: "white_feather_mire", weight: 25, tags: ["grain_rescue"] },
        { type: "route", id: "birdmouse_to_mire", weight: 20, tags: ["grain_rescue"] }
      ],
      fogCount: { min: 1, max: 3 },
      rescueTags: ["axle_rescue", "grain_rescue", "sanity_rescue"]
    },
    bird_mouse_pass: {
      requiredRoutes: ["birdmouse_to_marsh"],
      optionalRoutes: [
        { id: "birdmouse_to_market", weight: 35, tags: ["grain_rescue", "sanity_rescue", "side"] },
        { id: "birdmouse_to_mire", weight: 30, tags: ["grain_rescue", "side"] }
      ],
      optionalCount: 1,
      fogPool: [
        { type: "location", id: "thunder_marsh", weight: 30, tags: ["grain_rescue"] },
        { type: "location", id: "black_teeth_market", weight: 30, tags: ["grain_rescue", "sanity_rescue"] },
        { type: "location", id: "white_feather_mire", weight: 25, tags: ["grain_rescue"] },
        { type: "route", id: "thunder_to_mire", weight: 20, tags: ["grain_rescue"] },
        { type: "route", id: "mire_to_red", weight: 20, tags: ["danger"] }
      ],
      fogCount: { min: 2, max: 3 },
      rescueTags: ["axle_rescue", "grain_rescue", "sanity_rescue"]
    },
    nameless_shrine: {
      requiredRoutes: ["shrine_to_marsh", "road_to_shaxu"],
      optionalRoutes: [
        { id: "shrine_to_market", weight: 35, tags: ["grain_rescue", "sanity_rescue", "side"] }
      ],
      optionalCount: 1,
      fogPool: [
        { type: "location", id: "thunder_marsh", weight: 30, tags: ["grain_rescue"] },
        { type: "location", id: "black_teeth_market", weight: 25, tags: ["grain_rescue", "sanity_rescue"] },
        { type: "location", id: "white_feather_mire", weight: 25, tags: ["grain_rescue"] },
        { type: "route", id: "market_to_mire", weight: 20, tags: ["grain_rescue"] }
      ],
      fogCount: { min: 1, max: 3 },
      rescueTags: ["grain_rescue", "sanity_rescue"]
    },
    thunder_marsh: {
      requiredRoutes: ["marsh_to_red"],
      optionalRoutes: [
        { id: "marsh_to_feather", weight: 35, tags: ["side", "mid_risk"] },
        { id: "thunder_to_mire", weight: 35, tags: ["grain_rescue", "mid_risk"] }
      ],
      optionalCount: 1,
      fogPool: [
        { type: "location", id: "red_marsh", weight: 35, tags: ["core", "danger"] },
        { type: "location", id: "white_feather_mire", weight: 30, tags: ["grain_rescue"] },
        { type: "location", id: "feather_folk_ford", weight: 25, tags: ["side"] },
        { type: "route", id: "mire_to_feather", weight: 20, tags: ["side"] },
        { type: "route", id: "mire_to_red", weight: 20, tags: ["danger"] }
      ],
      fogCount: { min: 2, max: 3 },
      rescueTags: ["grain_rescue"]
    },
    black_teeth_market: {
      requiredRoutes: ["market_to_stele"],
      optionalRoutes: [
        { id: "market_to_red", weight: 20, tags: ["danger", "high_grain_cost"] },
        { id: "market_to_feather", weight: 30, tags: ["side"] },
        { id: "market_to_mire", weight: 35, tags: ["grain_rescue", "side"] }
      ],
      optionalCount: 2,
      fogPool: [
        { type: "location", id: "broken_stele", weight: 35, tags: ["sanity_rescue", "core"] },
        { type: "location", id: "red_marsh", weight: 25, tags: ["danger"] },
        { type: "location", id: "white_feather_mire", weight: 30, tags: ["grain_rescue"] },
        { type: "route", id: "stele_to_dream", weight: 20, tags: ["sanity_rescue"] },
        { type: "route", id: "mire_to_feather", weight: 20, tags: ["side"] }
      ],
      fogCount: { min: 2, max: 3 },
      rescueTags: ["grain_rescue", "sanity_rescue"]
    },
    white_feather_mire: {
      requiredRoutes: ["mire_to_feather"],
      optionalRoutes: [
        { id: "mire_to_red", weight: 30, tags: ["danger", "core"] }
      ],
      optionalCount: 1,
      fogPool: [
        { type: "location", id: "feather_folk_ford", weight: 30, tags: ["side"] },
        { type: "location", id: "red_marsh", weight: 30, tags: ["danger", "core"] },
        { type: "location", id: "dream_map_post", weight: 25, tags: ["sanity_rescue", "rift_buffer"] },
        { type: "route", id: "feather_to_dream", weight: 20, tags: ["rift_buffer"] },
        { type: "route", id: "red_to_dream", weight: 20, tags: ["rift_buffer"] }
      ],
      fogCount: { min: 1, max: 3 },
      rescueTags: ["grain_rescue", "sanity_rescue"]
    },
    feather_folk_ford: {
      requiredRoutes: ["feather_to_dream"],
      optionalRoutes: [
        { id: "feather_to_red", weight: 30, tags: ["danger", "side"] }
      ],
      optionalCount: 1,
      fogPool: [
        { type: "location", id: "red_marsh", weight: 30, tags: ["danger"] },
        { type: "location", id: "dream_map_post", weight: 30, tags: ["sanity_rescue", "rift_buffer"] },
        { type: "location", id: "kyushu_rift", weight: 20, tags: ["rift"] },
        { type: "route", id: "dream_to_rift", weight: 20, tags: ["rift"] }
      ],
      fogCount: { min: 1, max: 3 },
      rescueTags: ["sanity_rescue"]
    },
    red_marsh: {
      requiredRoutes: ["red_to_stele"],
      optionalRoutes: [
        { id: "red_to_dream", weight: 30, tags: ["sanity_rescue", "rift_buffer"] },
        { id: "red_to_rift", weight: 15, tags: ["locked", "danger", "rift_shortcut"] }
      ],
      optionalCount: 2,
      fogPool: [
        { type: "location", id: "broken_stele", weight: 35, tags: ["sanity_rescue", "core_safe_exit"] },
        { type: "location", id: "dream_map_post", weight: 30, tags: ["sanity_rescue", "rift_buffer"] },
        { type: "location", id: "kyushu_rift", weight: 20, tags: ["rift"] },
        { type: "route", id: "stele_to_rift", weight: 30, tags: ["core"] },
        { type: "route", id: "dream_to_rift", weight: 20, tags: ["rift"] }
      ],
      fogCount: { min: 2, max: 3 },
      rescueTags: ["sanity_rescue"]
    },
    broken_stele: {
      requiredRoutes: ["stele_to_rift"],
      optionalRoutes: [
        { id: "stele_to_dream", weight: 35, tags: ["sanity_rescue", "rift_buffer"] }
      ],
      optionalCount: 1,
      fogPool: [
        { type: "location", id: "dream_map_post", weight: 30, tags: ["sanity_rescue", "rift_buffer"] },
        { type: "location", id: "kyushu_rift", weight: 30, tags: ["rift"] },
        { type: "route", id: "dream_to_rift", weight: 20, tags: ["rift"] }
      ],
      fogCount: { min: 1, max: 2 },
      rescueTags: ["sanity_rescue"]
    },
    dream_map_post: {
      requiredRoutes: ["dream_to_rift"],
      optionalRoutes: [],
      optionalCount: 0,
      fogPool: [
        { type: "location", id: "kyushu_rift", weight: 30, tags: ["rift"] }
      ],
      fogCount: 1,
      rescueTags: ["sanity_rescue"]
    },
    kyushu_rift: {
      requiredRoutes: [],
      optionalRoutes: [],
      optionalCount: 0,
      fogPool: [],
      fogCount: 0,
      rescueTags: []
    }
  },
  fogLabels: {
    old_king_road: { name: "旧道深辙", hint: "两道车痕压向雾里" },
    qingqiu_outer_city: { name: "狐灯城影", hint: "小灯成排，不报真名" },
    bird_mouse_pass: { name: "山腹细洞", hint: "细洞声贴着车轮" },
    nameless_shrine: { name: "无匾小祠", hint: "新香灰指向岔路" },
    thunder_marsh: { name: "伏雷浅泽", hint: "泥下有雷压着水" },
    white_feather_mire: { name: "沉羽浅淖", hint: "白羽在水下发亮" },
    feather_folk_ford: { name: "羽压水纹", hint: "渡口暂不肯显名" },
    black_teeth_market: { name: "日中市口", hint: "正午处立起棚影" },
    dream_map_post: { name: "梦图卷口", hint: "图边卷成一扇门" },
    red_marsh: { name: "赤水纸背", hint: "红水从纸背渗出" },
    broken_stele: { name: "断碑残笔", hint: "半截巫文露出雾" },
    kyushu_rift: { name: "纸尽裂痕", hint: "图尽处有暗缝" }
  },
  routeEvents: {
    wheel_omen: {
      title: "轮声入骨",
      tag: "路遇",
      texts: {
        clear: "前轮忽然空响，路面却没有石子。轴心像被人从里面轻敲了一下。",
        uneasy: "空响从队尾追上来。轴心里有一小段路醒着。",
        mad: "轮在叫你。轴心里有一小段路醒着，它说再往前一点，就能把车队套进去。"
      },
      choices: [
        {
          label: "停车紧轴",
          hint: "车轴 +5，粮草 -3",
          effect: { axle: 5, grain: -3, sanity: 0 },
          result: "你们在路心停下，重新紧过轮楔。车轴吃住了木楔，车声重新变稳。"
        },
        {
          label: "不停赶路",
          hint: "粮草 -1，神志 -5",
          effect: { axle: 0, grain: -1, sanity: -5 },
          result: "车队没有停。那声空响很快追到每个人耳后。"
        }
      ]
    },
    roadside_shrine: {
      title: "路旁无名祠",
      tag: "路遇",
      texts: {
        clear: "路旁小祠无匾，香灰却新。祠后短路旁留着几道怪脚印。",
        uneasy: "小祠每走一步都近一点。空供位上像写着车队的影子。",
        mad: "祠在路旁，也在路中。你们每走一步，它就近一点。祠里供着空位，空位上写着车队的影子。"
      },
      choices: [
        {
          label: "献粟问路",
          hint: "粮草 -4，神志 +5",
          effect: { axle: 0, grain: -4, sanity: 5 },
          result: "一小撮粟撒进香灰，灰面显出半截可走的弯路。"
        },
        {
          label: "绕祠而过",
          hint: "车轴 -3",
          effect: { axle: -3, grain: 0, sanity: 0 },
          result: "你们绕开小祠，车轮压过一片硬土，像压碎了许多干骨。"
        }
      ]
    },
    black_cloud: {
      title: "半途黑云",
      tag: "路遇",
      texts: {
        clear: "黑云贴着地面滚来，像低飞的影。车队得卸重等它，或抢在云前穿过。",
        uneasy: "云在地上，天在车轮旁。黑色的口等你们驶进去。",
        mad: "云在下面。天在车轮旁边。黑色的东西一张一合，等你们把名字驶进去。"
      },
      choices: [
        {
          label: "卸重避云",
          hint: "车轴 +4，粮草 -5",
          effect: { axle: 4, grain: -5, sanity: 0 },
          result: "车队卸下一箱湿重杂物，避到浅坡后。黑云擦着车辙过去，留下一层细灰。"
        },
        {
          label: "循雷探路",
          hint: "车轴 -4，神志 -4",
          effect: { axle: -4, grain: 0, sanity: -4 },
          result: "你们循着云下的雷声探路，车辙短暂变得清楚，也听见雷声里有人跟着数步。"
        }
      ]
    },
    wenao_fish_rain: {
      title: "文鳐雨",
      tag: "路遇",
      texts: {
        clear: "薄云里游过文鳐，鳞光落在车辙旁。粮袋闻到水腥味。",
        uneasy: "天上先响起水声。文鳐从眼里游过，吐出旧粮。",
        mad: "天上有水。文鳐从你眼里游过，吐出一袋旧粮。"
      },
      choices: [
        {
          label: "收鳞作粮",
          hint: "粮草 +6，神志 -2",
          effect: { axle: 0, grain: 6, sanity: -2 },
          result: "鳞片入袋后仍有水腥，粮袋却重了。"
        },
        {
          label: "覆袋避鳞",
          hint: "粮草 -2，神志 +3",
          effect: { axle: 0, grain: -2, sanity: 3 },
          result: "车队不看天鱼，心神稳了一些。"
        },
        {
          label: "追鱼入浅泽",
          hint: "车轴 -2，粮草 +9，神志 -4",
          effect: { axle: -2, grain: 9, sanity: -4, flag: "wenao_trace" },
          result: "浅泽给了粮，也咬住一截车轮。"
        }
      ]
    },
    dang_kang_field_cry: {
      title: "当康啼垄",
      tag: "路遇",
      texts: {
        clear: "荒垄里有白牙兽低啼，土下翻出新谷味。跟着啼声走，粮会多些，车会陷些。",
        uneasy: "那声啼叫像从粮袋里传来。旧田鼓起，等车轮压下去。",
        mad: "田在肚中。那兽叫一声，粮袋就回头看你。"
      },
      choices: [
        {
          label: "随啼翻土",
          hint: "车轴 -2，粮草 +8",
          effect: { axle: -2, grain: 8, sanity: 0 },
          result: "旧田吐出干谷，车轮陷过一层软土。"
        },
        {
          label: "献粟安兽",
          hint: "粮草 -3，神志 +4",
          effect: { axle: 0, grain: -3, sanity: 4 },
          result: "白牙兽停啼，荒田也安静下来。"
        },
        {
          label: "驱兽避垄",
          hint: "车轴 -3，神志 -2",
          effect: { axle: -3, grain: 0, sanity: -2 },
          result: "车队把白牙兽赶离田垄，轮轴擦过硬土，身后仍有啼声跟来。"
        }
      ]
    },
    xuan_gui_shell_bridge: {
      title: "旋龟浮甲",
      tag: "路遇",
      texts: {
        clear: "浅水浮出龟甲，甲纹正好接成一截桥。借它过水，车轴能少受些苦。",
        uneasy: "不是龟在水里，是路背着甲醒了。甲纹慢慢转向车轮。",
        mad: "不是龟在水里，是路背着甲醒了。"
      },
      choices: [
        {
          label: "借甲过水",
          hint: "车轴 +5，粮草 -5，神志 -1",
          effect: { axle: 5, grain: -5, sanity: -1 },
          result: "龟甲托过车辙，水声在车后合拢。"
        },
        {
          label: "撬甲补轴",
          hint: "车轴 +7，神志 -4",
          effect: { axle: 7, grain: 0, sanity: -4, flag: "xuan_shell" },
          result: "甲片嵌进轮侧，纹路还在慢慢转。"
        },
        {
          label: "绕水慢行",
          hint: "粮草 -4，神志 +2",
          effect: { axle: 0, grain: -4, sanity: 2 },
          result: "你们避开浮甲，远路反而让人安心。"
        }
      ]
    },
    zhu_bird_name_call: {
      title: "鴸鸟呼名",
      tag: "路遇",
      texts: {
        clear: "赤喙鸟落在辕木上，学着随从的姓名叫。被叫的人先回了头。",
        uneasy: "名字自己飞到辕木上。鸟只是等你答应。",
        mad: "鸟没有叫。名字自己飞到辕木上，等你答应。"
      },
      choices: [
        {
          label: "不应声赶鸟",
          hint: "车轴 -2，神志 +4",
          effect: { axle: -2, grain: 0, sanity: 4 },
          result: "鸟影被赶走，辕木却裂出一道细纹。"
        },
        {
          label: "以假名答",
          hint: "神志 -3",
          effect: { axle: 0, grain: 0, sanity: -3, flag: "false_name_echo" },
          result: "假名被鸟叼走，真名暂时无事。"
        },
        {
          label: "记下鸟声",
          hint: "神志 -6，巫咸古辞 +10",
          effect: { axle: 0, grain: 0, sanity: -6, language: { wuxian: 10 } },
          result: "鸟声写成残笔，听久了像碑文。"
        }
      ]
    },
    fox_lamp_tail: {
      title: "九尾灯影",
      tag: "路遇",
      texts: {
        clear: "岔路旁九点狐灯排开，像尾巴拖在土上。灯不照远处，只照出近路的边。",
        uneasy: "九条灯尾绕住车轮。每一条都通向同一盏灯。",
        mad: "九条尾巴绕住车轮，每一条都通向同一盏灯。"
      },
      choices: [
        {
          label: "挂灯行夜",
          hint: "粮草 -3，神志 +5",
          effect: { axle: 0, grain: -3, sanity: 5 },
          result: "狐灯挂上车头，夜色退后半步。"
        },
        {
          label: "剪影留路",
          hint: "车轴 -2，神志 -2",
          effect: { axle: -2, grain: 0, sanity: -2, flag: "fox_tail_mark" },
          result: "一截影子留在地上，指向狐灯外的小路。"
        },
        {
          label: "熄灯守名",
          hint: "粮草 -1，神志 +2",
          effect: { axle: 0, grain: -1, sanity: 2 },
          result: "灯灭之后，队里没人再报真名。"
        }
      ]
    },
    black_teeth_scale_price: {
      title: "黑齿鳞价",
      tag: "路遇",
      texts: {
        clear: "路心摊着一片青鳞，黑齿商人伸出三指。鳞上还带水，像刚从价码里捞出。",
        uneasy: "鳞是价，价在鳞上游。黑齿一笑，明日少了一角。",
        mad: "鳞是价，价是舌。黑齿一笑，明日少了一角。"
      },
      choices: [
        {
          label: "旧铁换粮",
          hint: "车轴 -3，粮草 +10",
          effect: { axle: -3, grain: 10, sanity: 0 },
          result: "旧铁离车，粮袋多了几日重量。"
        },
        {
          label: "粮换鳞引",
          hint: "粮草 -5，神志 -2",
          effect: { axle: 0, grain: -5, sanity: -2, flag: "scale_price" },
          result: "青鳞贴在地图边，自己游出一寸方向。"
        },
        {
          label: "不看价码",
          hint: "粮草 -2，神志 +3",
          effect: { axle: 0, grain: -2, sanity: 3 },
          result: "你们绕开摊位，身后笑声很快收住。"
        }
      ]
    },
    ming_snake_crosswind: {
      title: "鸣蛇横风",
      tag: "路遇",
      texts: {
        clear: "无风处忽起细鸣，蛇影横过车辙。马不肯踩影，队伍得先决定怎么过。",
        uneasy: "风长出鳞，蛇鸣从车底钻出。它用骨声挡路。",
        mad: "风长出鳞。它横在路上，用你们的骨声作鸣。"
      },
      choices: [
        {
          label: "埋火等风停",
          hint: "粮草 -3，神志 +4",
          effect: { axle: 0, grain: -3, sanity: 4 },
          result: "火灰压住蛇鸣，车队等到风影变淡。"
        },
        {
          label: "趁鸣急过",
          hint: "车轴 -4，神志 -5",
          effect: { axle: -4, grain: 0, sanity: -5 },
          result: "车队冲过蛇影，轮声里多了一段细鸣。"
        },
        {
          label: "割绳引蛇",
          hint: "车轴 +3，粮草 -4，神志 -3",
          effect: { axle: 3, grain: -4, sanity: -3 },
          result: "旧绳被蛇影吞去，车架反而松出活路。"
        }
      ]
    },
    bone_ox_rut: {
      title: "骨牛空辙",
      tag: "路遇",
      texts: {
        clear: "一头骨牛拉着空车，从侧路无声经过。车没有轮，却在土上压出深辙。",
        uneasy: "骨牛拉着你们没到的车。空辙比前路更清楚。",
        mad: "骨牛没有头。它拉着你们尚未抵达的车。"
      },
      choices: [
        {
          label: "沿空辙借路",
          hint: "车轴 +4，神志 -5",
          effect: { axle: 4, grain: 0, sanity: -5, flag: "bone_rut" },
          result: "空辙托住车轮，也把影子拖长了。"
        },
        {
          label: "折辙止影",
          hint: "车轴 -3，神志 +5",
          effect: { axle: -3, grain: 0, sanity: 5 },
          result: "你们铲断深辙，骨牛声停在远处。"
        },
        {
          label: "投粮换辙",
          hint: "车轴 +6，粮草 -5",
          effect: { axle: 6, grain: -5, sanity: 0 },
          result: "粮袋落地后，空车让出一条硬路。"
        }
      ]
    },
    mirror_reed_bed: {
      title: "倒芦照人",
      tag: "路遇",
      texts: {
        clear: "芦苇倒生在水面下，穗上挂着白籽。能收粮，但倒影先伸了手。",
        uneasy: "你们像站在水下。岸上的影子正弯腰收割你们。",
        mad: "你们站在水下。岸上的人正弯腰收割你们。"
      },
      choices: [
        {
          label: "割倒芦籽",
          hint: "粮草 +7，神志 -3",
          effect: { axle: 0, grain: 7, sanity: -3 },
          result: "白籽入袋，倒影少了一只手。"
        },
        {
          label: "闭眼过芦",
          hint: "粮草 -2，神志 +4",
          effect: { axle: 0, grain: -2, sanity: 4 },
          result: "你们不看水面，芦影也不再追来。"
        },
        {
          label: "铺芦垫轮",
          hint: "车轴 +4，粮草 -4",
          effect: { axle: 4, grain: -4, sanity: 0 },
          result: "湿芦托住车轮，很快沉进泥下。"
        }
      ]
    },
    dream_cicada_shell: {
      title: "梦蝉蜕壳",
      tag: "路遇",
      texts: {
        clear: "枯树挂满蝉蜕，空壳里有微弱车声。每只壳都朝西。",
        uneasy: "蝉把梦蜕下，车队还在壳里走。西边像一层旧皮。",
        mad: "蝉把梦蜕下。你们还在壳里走路。"
      },
      choices: [
        {
          label: "束壳静心",
          hint: "粮草 -4，神志 +6",
          effect: { axle: 0, grain: -4, sanity: 6 },
          result: "蝉壳被绳束住，梦声也低了下去。"
        },
        {
          label: "垫壳护轴",
          hint: "车轴 +4，神志 -3",
          effect: { axle: 4, grain: 0, sanity: -3 },
          result: "空壳垫在轮下，碎响像一夜小梦。"
        },
        {
          label: "焚壳辨烟",
          hint: "粮草 -2，神志 -2",
          effect: { axle: 0, grain: -2, sanity: -2, flag: "dream_smoke" },
          result: "烟柱向纸背弯去，指出梦图前路。"
        }
      ]
    }
  },
  randomRouteEvents: {
    rnd_loose_axle_song: {
      title: "鸣蛇入轴",
      tag: "随机路遇",
      pool: ["risk", "item"],
      shjAnchor: { name: "鸣蛇", type: "异兽/雷泽声异", mode: "直名引用" },
      risk: "low",
      routeTags: ["road", "water", "early", "mid"],
      trigger: { phase: "mid_route", axleMax: 62 },
      weight: 18,
      cooldown: 2,
      positiveTag: true,
      rescueCandidate: true,
      texts: {
        clear: "车轴里钻出细鸣，像一条看不见的蛇绕着轮毂盘了一圈。木楔没有裂，却一直发热。",
        uneasy: "鸣声先从骨头里响起。轮毂像含着一条细蛇，催你们不要停。",
        mad: "轴在唱。蛇在轴里学你们的归期，一圈一圈，把路绕成喉咙。"
      },
      choices: [
        {
          label: "停车听声辨裂",
          hint: "车轴 +7，粮草 -3",
          effect: { axle: 7, grain: -3, sanity: 0, badLuck: -6, flag: "heard_axle_song" },
          result: "你们拆开轮毂，照着鸣声紧过暗裂。木楔咬住轴心，车轴终于稳了。"
        },
        {
          label: "塞布止鸣赶路",
          hint: "粮草 -1，神志 -4",
          effect: { axle: 0, grain: -1, sanity: -4, badLuck: 2 },
          result: "布条堵住鸣声，却堵不住耳后的回响。车队继续走，没人再提那条蛇。"
        }
      ]
    },
    rnd_bitter_grass_soup: {
      title: "祝余苦汤",
      tag: "随机路遇",
      pool: ["supply", "rest"],
      shjAnchor: { name: "祝余", type: "草木物产", mode: "直名引用" },
      risk: "low",
      routeTags: ["road", "water", "early", "mid"],
      trigger: { phase: "mid_route", grainMax: 60 },
      weight: 20,
      cooldown: 2,
      positiveTag: true,
      rescueCandidate: true,
      texts: {
        clear: "路旁祝余草叶厚如小掌，煮后能压饥，只是汤色黑得像夜路。",
        uneasy: "苦味先在梦里醒来。草汤还没煮，粮袋已经轻了一点。",
        mad: "你喝下路。路在肚里发苦，仍替你们顶住一程饥。"
      },
      choices: [
        {
          label: "采草煮汤",
          hint: "粮草 +10，神志 -3",
          effect: { axle: 0, grain: 10, sanity: -3, badLuck: -10, flag: "bitter_grass" },
          result: "苦汤入腹，队伍多撑了一程。夜里有人梦见草根在替车队数路。"
        },
        {
          label: "只取草籽",
          hint: "粮草 +5，神志 +2",
          effect: { axle: 0, grain: 5, sanity: 2, badLuck: -7 },
          result: "草籽少，却干净。随从把剩下的苦味留在路边。"
        }
      ]
    },
    rnd_wrong_milestone: {
      title: "巫咸反里",
      tag: "随机路遇",
      pool: ["clue", "sanity"],
      shjAnchor: { name: "巫咸", type: "巫祝/占路", mode: "直名引用" },
      risk: "medium",
      routeTags: ["road", "market", "mid"],
      trigger: { phase: "mid_route" },
      weight: 15,
      cooldown: 2,
      positiveTag: true,
      texts: {
        clear: "里程牌倒插在路边，字却反着往西长。若拓下来，或许能省一段错路。",
        uneasy: "里程不是写给活人看的。反字从牌背爬出来，像在替你们倒数。",
        mad: "牌子走在你们前面。每一里都反过来，把你们往已经经过的地方推。"
      },
      choices: [
        {
          label: "拓下反字",
          hint: "神志 -4，巫咸古辞 +8",
          effect: { axle: 0, grain: 0, sanity: -4, language: { wuxian: 8 }, badLuck: -4, flag: "reverse_mile_mark" },
          result: "反字印在纸上，西边的雾少了一层。只是看久了，连脚步也想倒着走。"
        },
        {
          label: "推倒里程牌",
          hint: "车轴 -3，神志 +2",
          effect: { axle: -3, grain: 0, sanity: 2, badLuck: 1 },
          result: "木牌倒地，车轮压过一声闷响。前路没有更清楚，但人心稳了些。"
        }
      ]
    },
    rnd_silent_barter: {
      title: "黑齿影价",
      tag: "随机路遇",
      pool: ["supply", "trade", "clue"],
      shjAnchor: { name: "黑齿国", type: "异国贸易", mode: "直名引用" },
      risk: "low",
      routeTags: ["market", "mid"],
      trigger: { phase: "mid_route" },
      weight: 17,
      cooldown: 2,
      positiveTag: true,
      rescueCandidate: true,
      texts: {
        clear: "路旁小摊无声，黑齿商人只让影子伸手比价。摊上的粮袋没有口，却很沉。",
        uneasy: "摊主不开口，影子却比人多一只手。价码在地上爬来爬去。",
        mad: "影子在卖你们。黑齿只是站着，等地上的价把人咬住。"
      },
      choices: [
        {
          label: "旧铁换粮",
          hint: "车轴 -3，粮草 +9",
          effect: { axle: -3, grain: 9, sanity: 0, badLuck: -8, flag: "silent_price" },
          result: "一截旧铁换来沉粮。车身轻了一点，粮袋却像多了一条影子。"
        },
        {
          label: "粮换路引",
          hint: "粮草 -5，神志 -2",
          effect: { axle: 0, grain: -5, sanity: -2, badLuck: -3, flag: "silent_price" },
          result: "商人收走粮，影子在地图边按出一枚黑印。"
        }
      ]
    },
    rnd_repeated_footprints: {
      title: "夸父复迹",
      tag: "随机路遇",
      pool: ["sanity", "clue"],
      shjAnchor: { name: "夸父", type: "巨迹遗路", mode: "直名引用" },
      risk: "medium",
      routeTags: ["road", "rift", "late"],
      trigger: { phase: "mid_route", sanityMax: 58 },
      weight: 16,
      cooldown: 2,
      positiveTag: true,
      texts: {
        clear: "路面出现半日前车队自己的脚印，又大得不像人。脚印朝西，也朝回头路。",
        uneasy: "你们踩进自己的过去。巨大的脚印像刚从日影里退回来。",
        mad: "脚印先走了你们。太阳追在后面，你们只剩下一串被走过的名字。"
      },
      choices: [
        {
          label: "跟脚印走",
          hint: "车轴 +2，粮草 +2，神志 -6",
          effect: { axle: 2, grain: 2, sanity: -6, badLuck: -3, flag: "followed_own_tracks" },
          result: "脚印带你们少绕一段湿地，却把队伍的影子拉得很长。"
        },
        {
          label: "抹掉脚印",
          hint: "粮草 -3，神志 +5",
          effect: { axle: 0, grain: -3, sanity: 5, badLuck: -5 },
          result: "随从撒土抹去脚印。路没有近些，但每个人终于只剩一双脚。"
        }
      ]
    },
    rnd_count_names_rest: {
      title: "巫咸点名",
      tag: "随机路遇",
      pool: ["rest", "sanity"],
      shjAnchor: { name: "巫咸国", type: "招魂点名", mode: "直名引用" },
      risk: "low",
      routeTags: ["road", "market", "water", "rift", "mid", "late"],
      trigger: { phase: "mid_route", sanityMax: 65 },
      weight: 18,
      cooldown: 2,
      positiveTag: true,
      rescueCandidate: true,
      texts: {
        clear: "短暂停车时，随从照例点名。点到最后，人数比影子少一个。",
        uneasy: "名字比人先坐下。点名声绕过车队，带回来一个空答应。",
        mad: "少的不是人，是你们还没丢的那个名字。它在队尾答到。"
      },
      choices: [
        {
          label: "重新点名",
          hint: "粮草 -4，神志 +7",
          effect: { axle: 0, grain: -4, sanity: 7, badLuck: -10, flag: "counted_names" },
          result: "你们多点了一遍名，空答应慢慢退到风里。队伍敢继续向前。"
        },
        {
          label: "不点名继续",
          hint: "神志 -4",
          effect: { axle: 0, grain: 0, sanity: -4, badLuck: 2 },
          result: "车队没有再数。走出很远后，队尾仍有人轻声说到。"
        }
      ]
    },
    rnd_low_black_cloud_gap: {
      title: "雷泽云缝",
      tag: "随机路遇",
      pool: ["risk", "clue"],
      shjAnchor: { name: "雷泽", type: "云雷异象", mode: "地貌衍生" },
      risk: "medium",
      routeTags: ["water", "rift", "late"],
      trigger: { phase: "mid_route" },
      weight: 14,
      cooldown: 2,
      positiveTag: true,
      texts: {
        clear: "贴地黑云裂开一条缝，缝里露出干路。它像在请车队进去，又像在合嘴前等最后一口气。",
        uneasy: "云从地上开门。门里没有雨，只有很干的雷声。",
        mad: "天在脚下张嘴。你们若进去，云会替你们把名字嚼轻。"
      },
      choices: [
        {
          label: "卸重等云",
          hint: "粮草 -5，车轴 +4",
          effect: { axle: 4, grain: -5, sanity: 0, badLuck: -4 },
          result: "队伍卸下湿重之物，等云缝自己合上。车轴少受了一截泥路。"
        },
        {
          label: "穿缝探路",
          hint: "车轴 -4，神志 -5，留下云缝痕",
          effect: { axle: -4, grain: 0, sanity: -5, badLuck: 2, flag: "black_cloud_gap" },
          result: "车队钻进云缝，干路在轮下只显出一瞬；每个人都听见雷声在背后数名。"
        }
      ]
    },
    rnd_breathing_map: {
      title: "烛龙息图",
      tag: "随机路遇",
      pool: ["sanity", "item", "clue"],
      shjAnchor: { name: "烛龙", type: "昼夜呼吸", mode: "直名引用" },
      risk: "medium",
      routeTags: ["rift", "late"],
      trigger: { phase: "mid_route", sanityMax: 62 },
      weight: 15,
      cooldown: 2,
      positiveTag: true,
      texts: {
        clear: "地图纸面像胸口起伏，山川随着一呼一吸偏移。若顺着它描，或许能看见图背的路。",
        uneasy: "地图在呼吸。每一次起伏，都把白天和黑夜换一次位置。",
        mad: "图在活。它把你们吸进去，又吐成一条更细的线。"
      },
      choices: [
        {
          label: "压住地图",
          hint: "粮草 -3，神志 +4",
          effect: { axle: 0, grain: -3, sanity: 4, badLuck: -5 },
          result: "几袋粮压住图角，山川渐渐平下去。队伍重新相信脚下的路。"
        },
        {
          label: "随呼吸描路",
          hint: "神志 -6，获得图息线索",
          effect: { axle: 0, grain: 0, sanity: -6, badLuck: -2, flag: "map_breath" },
          result: "你们按着纸面起伏描下一条新线。墨迹未干，线已经在图背慢慢转动。"
        }
      ]
    },
    rnd_red_backflow: {
      generatedArt: false,
      title: "赤水倒流",
      tag: "随机路遇",
      pool: ["risk", "clue", "sanity"],
      shjAnchor: { name: "赤水", type: "倒流之水", mode: "地名引用" },
      risk: "medium",
      routeTags: ["red_marsh"],
      trigger: { phase: "mid_route" },
      weight: 24,
      cooldown: 2,
      texts: {
        clear: "赤水忽然把落日照反了方向，水往东退，岸骨却指向西。你们只有一次渡过去的时机。",
        uneasy: "水声先于水到。赤水在退，倒影却在往前推，像替你们先走了一程。",
        mad: "河在倒着流。岸上的骨头都站起来看你们过水，谁也没有影子。"
      },
      choices: [
        {
          label: "等日落再渡",
          hint: "粮草 -4，神志 +2，记下倒流",
          effect: { axle: 0, grain: -4, sanity: 2, badLuck: -4, flag: "accepted_mirage" },
          result: "你们压住车队等最后一线日光。水退回旧道时，岸上多出一条短短的白痕。"
        },
        {
          label: "趁逆流硬渡",
          hint: "车轴 -5，神志 -6",
          effect: { axle: -5, grain: 0, sanity: -6, badLuck: 2 },
          result: "车轮逆着水走，轴心一路发烫。对岸到了，队伍却很久没人说话。"
        },
        {
          label: "沿旧骨退岸",
          hint: "粮草 -2，神志 +4",
          effect: { axle: 0, grain: -2, sanity: 4, badLuck: -3 },
          result: "你们退回旧骨围出的高岸，等水自己认回方向。多耗半天，人却清醒。"
        }
      ]
    },
    rnd_dream_toll: {
      generatedArt: false,
      title: "梦驿收梦钱",
      tag: "随机路遇",
      pool: ["trade", "sanity", "clue"],
      shjAnchor: { name: "梦图驿", type: "梦境关卡", mode: "地名引用" },
      risk: "medium",
      routeTags: ["dream_map_post"],
      trigger: { phase: "mid_route" },
      weight: 24,
      cooldown: 2,
      texts: {
        clear: "梦图驿外多了一张矮桌，守梦人说要过路，得留下一个昨夜做过的梦。",
        uneasy: "守梦人不要粮，也不要车轴，只要你们说出昨夜谁没有醒来。",
        mad: "桌上摆着你们还没做的梦。守梦人已经替你们付过钱，只等你们签名字。"
      },
      choices: [
        {
          label: "交一段梦",
          hint: "神志 -5，粮草 +4",
          effect: { axle: 0, grain: 4, sanity: -5, badLuck: -3 },
          result: "你们把一段无用的梦推过桌面。守梦人称了称，找回几袋干粮。"
        },
        {
          label: "记下梦门",
          hint: "神志 -3，车轴 +2，梦门标记",
          effect: { axle: 2, grain: 0, sanity: -3, flag: "dream_gate_mark" },
          result: "你们不交梦，只把门上的纹样拓下来。守梦人笑了笑，没有拦。"
        },
        {
          label: "不睡赶路",
          hint: "车轴 -4，神志 +1",
          effect: { axle: -4, grain: 0, sanity: 1 },
          result: "车队连夜绕过梦驿。没有人做梦，也没有人真正睡过。"
        }
      ]
    },
    rnd_feather_roll_call: {
      generatedArt: false,
      title: "羽民点名",
      tag: "随机路遇",
      pool: ["language", "trade", "clue"],
      shjAnchor: { name: "羽民", type: "异族", mode: "直名引用" },
      risk: "low",
      routeTags: ["feather_folk_ford"],
      trigger: { phase: "mid_route" },
      weight: 22,
      cooldown: 2,
      texts: {
        clear: "渡口有人按旧册点名。点到你们时，念的是出发前的名字，不是现在用的称呼。",
        uneasy: "点名的人不看脸，只听应声。应错一次，旧名债就多一笔。",
        mad: "册上全是你们没活过的名字。点到谁，谁就得替那个人应一声。"
      },
      choices: [
        {
          label: "应下旧名",
          hint: "粮草 -3，神志 +4，还一笔旧名债",
          effect: { axle: 0, grain: -3, sanity: 4, flag: "feather_debt_repaid" },
          result: "你们应了那个早该丢掉的名字，又用一袋粮把债抵平。点名的人合上册子。"
        },
        {
          label: "用白羽语对答",
          hint: "白羽语 ≥10：白羽语 +8，粮草 -4",
          conditions: [{ languageMin: { key: "feather", value: 10 } }],
          effect: { axle: 0, grain: -4, sanity: 2, language: { feather: 8 } },
          result: "你用白羽语回了一句旧礼。点名的人愣了一下，把你们的名字往后挪了半页。"
        },
        {
          label: "低头过账",
          hint: "粮草 +3，神志 -6",
          effect: { axle: 0, grain: 3, sanity: -6 },
          result: "你们不应名，只把粮袋压上账桌。点名的人收下粮，仍在册上画了一道。"
        }
      ]
    },
    rnd_stele_names: {
      generatedArt: false,
      title: "断碑回名",
      tag: "随机路遇",
      pool: ["clue", "rest", "sanity"],
      shjAnchor: { name: "巫咸", type: "古碑巫辞", mode: "直名引用" },
      risk: "low",
      routeTags: ["broken_stele"],
      trigger: { phase: "mid_route" },
      weight: 22,
      cooldown: 2,
      rescueCandidate: true,
      texts: {
        clear: "断碑背阴处浮出一列回名，像是给走过的人留的。拓下来，能补全巫辞里缺的字。",
        uneasy: "碑上的名字比上次多了一个。你们谁也没有说破，只听见风从字缝里过。",
        mad: "每个字都在叫你们回头。碑没有断，断的是读碑的人。"
      },
      choices: [
        {
          label: "拓下回名",
          hint: "神志 -3，巫辞 +10",
          effect: { axle: 0, grain: 0, sanity: -3, language: { wuxian: 10 }, flag: "counted_names" },
          result: "你们把回名拓在薄纸上。巫辞里几个一直读不出的字，忽然有了声音。"
        },
        {
          label: "依碑歇脚",
          hint: "神志 +6，粮草 -4",
          effect: { axle: 0, grain: -4, sanity: 6, badLuck: -4 },
          result: "车队在碑影里歇了一夜。没有人做噩梦，醒来时粮袋轻了一角。"
        },
        {
          label: "不读回名",
          hint: "车轴 -2，粮草 +2",
          effect: { axle: -2, grain: 2, sanity: 0 },
          result: "你们绕开碑面，只从碑座下摸出半袋旧粟。名字留在背后，没有跟上来。"
        }
      ]
    },
    rnd_black_scale_debt: {
      generatedArt: false,
      title: "黑齿追鳞",
      tag: "随机路遇",
      pool: ["trade", "risk"],
      shjAnchor: { name: "黑齿国", type: "异族商市", mode: "直名引用" },
      risk: "medium",
      routeTags: ["black_teeth_market"],
      trigger: { phase: "mid_route" },
      weight: 24,
      cooldown: 2,
      texts: {
        clear: "黑齿商人追出市口，说上一笔鳞价算错了，要你们补一袋粮，或者留下一片青鳞。",
        uneasy: "追账的人不喊价，只把算盘拨得很快。每响一声，车轴就轻一分。",
        mad: "他们没有追你们，是在追你们欠下的那条鱼。鱼在车底游，账在岸上响。"
      },
      choices: [
        {
          label: "以粮抵鳞",
          hint: "粮草 -7，神志 +3，影价结清",
          effect: { axle: 0, grain: -7, sanity: 3, badLuck: -4, flag: "black_price_settled" },
          result: "你们补上一袋粮，商人把鳞价划掉。账清了，车队也轻了。"
        },
        {
          label: "亮出旧价",
          hint: "已得黑齿影价：车轴 +5，粮草 -3",
          requireAny: [{ flag: "black_price" }],
          effect: { axle: 5, grain: -3, sanity: 0, flag: "black_price_settled" },
          result: "你们把踩散的影价重新报出。商人沉默片刻，按旧价收了粮，还让出一段硬路。"
        },
        {
          label: "趁夜过市",
          hint: "车轴 -4，神志 -5",
          effect: { axle: -4, grain: 0, sanity: -5, badLuck: 2 },
          result: "车队摸黑绕过市口。追账声远了，车轴却在黑石上磕出一道新伤。"
        }
      ]
    },
    rnd_marsh_drum_rest: {
      generatedArt: false,
      title: "泽鼓歇脚",
      tag: "随机路遇",
      pool: ["rest", "supply"],
      shjAnchor: { name: "雷泽", type: "泽畔雷声", mode: "地名引用" },
      risk: "low",
      routeTags: ["thunder_marsh"],
      trigger: { phase: "mid_route" },
      weight: 20,
      cooldown: 2,
      rescueCandidate: true,
      texts: {
        clear: "泥下的鼓声慢下来，像在替车队打拍子。芦根被雷火烤熟一截，正好歇脚。",
        uneasy: "鼓声一停，水就把车轮抱住。随从说，得踩着鼓点挖，才不会被泥吞。",
        mad: "鼓在泥里敲，人在鼓里走。每敲一下，就有一个随从想起自己不是第一个随从。"
      },
      choices: [
        {
          label: "听鼓歇一夜",
          hint: "神志 +6，粮草 -4",
          effect: { axle: 0, grain: -4, sanity: 6, badLuck: -5 },
          result: "你们按鼓点轮班守夜。天亮时泥水退开，车轮重新咬住硬地。"
        },
        {
          label: "挖芦根",
          hint: "粮草 +8，神志 -3",
          effect: { axle: 0, grain: 8, sanity: -3 },
          result: "芦根一丛丛挖出来，泥里全是细雷。车队吃饱了，耳朵却一直嗡嗡响。"
        },
        {
          label: "趁鼓赶路",
          hint: "车轴 +4，神志 -2",
          effect: { axle: 4, grain: 0, sanity: -2 },
          result: "你们踩着鼓点推车上硬坎。鼓声送了一程，又在背后慢慢沉下去。"
        }
      ]
    },
    rnd_pass_seal_ledger: {
      generatedArt: false,
      title: "废关补封",
      tag: "随机路遇",
      pool: ["clue", "trade"],
      shjAnchor: { name: "废关", type: "旧关封条", mode: "地名引用" },
      risk: "low",
      routeTags: ["abandoned_pass"],
      trigger: { phase: "mid_route" },
      weight: 18,
      cooldown: 2,
      texts: {
        clear: "废关门上新糊了一道封条，守关人说西行可以，但要拿旧令拓片换。",
        uneasy: "封条上的字还没有干。守关人背对着门，却知道你们车上有几张旧纸。",
        mad: "门被封了两次。第一次是王朝封的，第二次是门自己封的。守关人只收名字。"
      },
      choices: [
        {
          label: "补一袋粮换封条",
          hint: "粮草 -5，车轴 +3，得旧令墨拓",
          effect: { axle: 3, grain: -5, sanity: 0, badLuck: -2, flag: "old_order" },
          result: "守关人收下粮，把封条撕开一角。你们拓下旧令，车轮重新压上关道。"
        },
        {
          label: "拓下封条",
          hint: "神志 -2，巫辞 +6",
          effect: { axle: 0, grain: 0, sanity: -2, language: { wuxian: 6 } },
          result: "你们不进门，只把封条上的字拓下来。墨迹里有一道不属于今朝的笔画。"
        },
        {
          label: "绕关墙",
          hint: "车轴 -3，神志 +2",
          effect: { axle: -3, grain: 0, sanity: 2 },
          result: "车队沿关墙外侧绕行。墙里有人敲了一下，像替你们放行。"
        }
      ]
    },
    rnd_burrow_clay_echo: {
      generatedArt: false,
      title: "鸟鼠土声",
      tag: "随机路遇",
      pool: ["clue", "rest", "sanity"],
      shjAnchor: { name: "鸟鼠同穴", type: "山腹异声", mode: "直名引用" },
      risk: "low",
      routeTags: ["bird_mouse_pass"],
      trigger: { phase: "mid_route" },
      weight: 18,
      cooldown: 2,
      rescueCandidate: true,
      texts: {
        clear: "山腹里传来土声，一轻一重，像有人在墙后替车队数轮子。",
        uneasy: "土声跟着车轮走。你们停，它也停；你们数，它比你们多数一下。",
        mad: "墙里没有鸟，也没有鼠，只有一间很小的屋子，屋里坐着你们中的一个。"
      },
      choices: [
        {
          label: "贴墙听声",
          hint: "神志 -4，得山腹暗路",
          effect: { axle: 0, grain: 0, sanity: -4, flag: "hollow_pass_hint" },
          result: "你们把耳朵贴上山壁，听清土声的间隔。墙后有一条窄路，窄得只够一辆车。"
        },
        {
          label: "填土静声",
          hint: "粮草 -3，神志 +4",
          effect: { axle: 0, grain: -3, sanity: 4, badLuck: -3 },
          result: "几袋土压住响处，山腹安静下来。随从说，这样至少今晚不会梦见那间屋子。"
        },
        {
          label: "快步通过",
          hint: "车轴 -2，神志 +1",
          effect: { axle: -2, grain: 0, sanity: 1 },
          result: "车队不歇，一口气穿过夹道。土声追到出口就停了。"
        }
      ]
    },
    rnd_market_eye_price: {
      generatedArt: false,
      title: "黑齿目价",
      tag: "随机路遇",
      pool: ["trade", "sanity"],
      shjAnchor: { name: "黑齿国", type: "异族商市", mode: "直名引用" },
      risk: "medium",
      routeTags: ["black_teeth_market"],
      trigger: { phase: "mid_route" },
      weight: 18,
      cooldown: 2,
      texts: {
        clear: "黑齿商人拦住车队，说愿意出高价买一段“看见过的东西”，不要眼睛。",
        uneasy: "他们不问你们见过什么，只问哪一段路你们还记得最清楚。",
        mad: "商人的眼眶里没有眼珠，只有两条你们走过的路。他们想买第三条。"
      },
      choices: [
        {
          label: "卖一段路",
          hint: "神志 -6，粮草 +9",
          effect: { axle: 0, grain: 9, sanity: -6 },
          result: "你们说出一段无关紧要的路。商人点头，粮袋压上车，你们却想不起那段路的样子。"
        },
        {
          label: "只看不卖",
          hint: "车轴 -2，神志 +2",
          effect: { axle: -2, grain: 0, sanity: 2 },
          result: "你们不卖，也不还价。商人看了很久，最后让开半步，只收了一点过路钱。"
        },
        {
          label: "以影价换目",
          hint: "已得黑齿影价：粮草 +4，神志 -3",
          requireAny: [{ flag: "black_price" }],
          effect: { axle: 0, grain: 4, sanity: -3, flag: "black_price_settled" },
          result: "你们把影价拍在柜上。商人收下旧账，找回几袋粮，却没有再看你们的眼睛。"
        }
      ]
    },
    rnd_mire_feather_toll: {
      generatedArt: false,
      title: "白羽渡资",
      tag: "随机路遇",
      pool: ["supply", "rest"],
      shjAnchor: { name: "白羽淖", type: "沉羽渡口", mode: "地名引用" },
      risk: "low",
      routeTags: ["white_feather_mire"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      rescueCandidate: true,
      texts: {
        clear: "淖边有人摆渡，船底压着一层白羽。摆渡人说，过水不要钱，只要一束干草。",
        uneasy: "摆渡人的船没有桨，白羽自己在水里走。他只肯收没有沾过水的草。",
        mad: "船在羽上，羽在船下。摆渡人问你们要草，还是要一个还能上岸的名字。"
      },
      choices: [
        {
          label: "给一束干草",
          hint: "粮草 -4，车轴 +4",
          effect: { axle: 4, grain: -4, sanity: 0 },
          result: "干草铺上船板，白羽托着车队过淖。车轮没有沾水，轴却像新上过油。"
        },
        {
          label: "捞沉羽",
          hint: "粮草 +6，神志 -3",
          effect: { axle: 0, grain: 6, sanity: -3 },
          result: "你们从水底捞起成把白羽，晾干后能换粮。羽民在远处看着，没有阻止。"
        },
        {
          label: "等水退",
          hint: "粮草 -2，神志 +4",
          effect: { axle: 0, grain: -2, sanity: 4, badLuck: -3 },
          result: "你们退到高处等水落。淖面低下去时，露出一条旧车辙，正好够一辆车走。"
        }
      ]
    },
    rnd_dream_ink_rain: {
      generatedArt: false,
      title: "梦图墨雨",
      tag: "随机路遇",
      pool: ["sanity", "clue"],
      shjAnchor: { name: "梦图", type: "纸上异象", mode: "直名引用" },
      risk: "medium",
      routeTags: ["dream_map_post"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      texts: {
        clear: "梦图驿下起墨雨。雨点落在纸上，地名一个一个被冲淡。",
        uneasy: "墨雨只落在图上，不落在人身上。被冲掉的地名，队伍里也没有人记得。",
        mad: "雨从纸里下出来。你们站在图外，却浑身是墨。"
      },
      choices: [
        {
          label: "护住梦图",
          hint: "粮草 -4，神志 +3",
          effect: { axle: 0, grain: -4, sanity: 3, badLuck: -2 },
          result: "你们用粮袋压住图角，墨雨顺着袋面流走。几个地名保住了，粮也湿了一角。"
        },
        {
          label: "接墨写名",
          hint: "神志 -5，巫辞 +8，梦烟路向",
          effect: { axle: 0, grain: 0, sanity: -5, language: { wuxian: 8 }, flag: "dream_smoke" },
          result: "你们用碗接住墨雨，在空白处写下自己的名字。字迹干了以后，纸背多出一条路。"
        },
        {
          label: "躲进驿檐",
          hint: "车轴 -2，神志 +1",
          effect: { axle: -2, grain: 0, sanity: 1 },
          result: "车队挤在驿檐下等雨停。图上的地名少了几个，路却没有断。"
        }
      ]
    },
    rnd_oldroad_milepost: {
      generatedArt: false,
      title: "故王道空里程",
      tag: "随机路遇",
      pool: ["risk", "supply"],
      shjAnchor: { name: "故王道", type: "旧朝里程", mode: "地名引用" },
      risk: "low",
      routeTags: ["old_king_road"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      texts: {
        clear: "路边里程牌只剩空格。每走一里，牌上就多出一道新刻痕。",
        uneasy: "刻痕在你们回头时变多。随从说，那是上一支车队在数自己的归期。",
        mad: "牌上没有数字，只有你们的名字。每走一里，名字就短一寸。"
      },
      choices: [
        {
          label: "数清刻痕",
          hint: "神志 -3，得反里墨拓",
          effect: { axle: 0, grain: 0, sanity: -3, flag: "reverse_mile_mark" },
          result: "你们一道一道数下去，数到比自己走过的路多出七道。拓下来时，纸是温的。"
        },
        {
          label: "补刻归期",
          hint: "粮草 -2，神志 +4",
          effect: { axle: 0, grain: -2, sanity: 4, badLuck: -3 },
          result: "你们在空白处补上归期。刻痕不再增加，车队重新有了可以回头的方向。"
        },
        {
          label: "推倒里程牌",
          hint: "车轴 +4，坏运 +3",
          effect: { axle: 4, grain: 0, sanity: 0, badLuck: 3 },
          result: "你们推倒旧牌，把木料拆成轮楔。路短了一截，坏运却像从牌底爬了出来。"
        }
      ]
    },

    rnd_last_grain_cache: {
      generatedArt: false,
      title: "荒窖残粟",
      tag: "随机路遇",
      pool: ["supply", "rest"],
      shjAnchor: { name: "荒窖", type: "荒年遗粟", mode: "意象引用" },
      risk: "low",
      routeTags: ["dream_map_post", "red_marsh", "broken_stele", "feather_folk_ford", "kyushu_rift"],
      maxPerRun: 2,
      trigger: { phase: "mid_route", grainMax: 32 },
      weight: 30,
      cooldown: 2,
      rescueCandidate: true,
      guaranteedWhenTriggered: true,
      texts: {
        clear: "路肩塌出一个旧窖，里面还剩半窖陈粟。窖口压着上一支车队的空粮袋。",
        uneasy: "土里露出粮袋的一角。你们越挖越深，窖底却没有影子。",
        mad: "窖里坐着一队人，正分你们车上的粮。他们抬头说：先吃吧，吃完再上路。"
      },
      choices: [
        {
          label: "挖开荒窖",
          hint: "粮草 +10，神志 -4",
          effect: { axle: 0, grain: 10, sanity: -4, badLuck: -3 },
          result: "你们把陈粟一袋袋抬上车。粮袋压稳时，车队里没有人愿意回头看那个窖口。"
        },
        {
          label: "只取一捧",
          hint: "粮草 +6，神志 +1",
          effect: { axle: 0, grain: 6, sanity: 1, badLuck: -2 },
          result: "你们只取一捧，把剩下的重新埋好。随从说，荒年留粮，等于给后来人留路。"
        },
        {
          label: "只取一半",
          hint: "粮草 +5，神志 +3",
          effect: { axle: 0, grain: 5, sanity: 3, badLuck: -3 },
          result: "你们取走一半，把剩下的重新埋好。随从说，荒年留粮，等于给后来人留路。"
        }
      ]
    },
    rnd_marsh_reed_omen: {
      generatedArt: false,
      title: "芦荡异声",
      tag: "随机路遇",
      pool: ["clue", "sanity", "rest"],
      shjAnchor: { name: "雷泽", type: "芦荡异声", mode: "地名引用" },
      risk: "low",
      routeTags: ["thunder_marsh"],
      trigger: { phase: "mid_route" },
      weight: 18,
      cooldown: 2,
      texts: {
        clear: "芦荡深处有声音，一长两短，像有人在用芦苇敲水。",
        uneasy: "芦声跟着车队的呼吸变。你们停，它变成三短；你们走，它又变回一长两短。",
        mad: "整片芦荡都在敲。每根芦苇里都藏着一句没说完的话。"
      },
      choices: [
        {
          label: "听芦声辨路",
          hint: "神志 -4，得文鳐水痕",
          effect: { axle: 0, grain: 0, sanity: -4, flag: "wenao_trace" },
          result: "你们按芦声的间隔辨出一段浅路。水底有鱼影一闪而过，鳞光像被谁写下的字。"
        },
        {
          label: "割芦扎筏",
          hint: "粮草 -2，车轴 +4",
          effect: { axle: 4, grain: -2, sanity: 0 },
          result: "芦苇割下来扎成筏板，车轮压在软泥上也不再下沉。"
        },
        {
          label: "绕开芦荡",
          hint: "粮草 -3，神志 +3",
          effect: { axle: 0, grain: -3, sanity: 3, badLuck: -2 },
          result: "车队从芦荡外沿绕行，多走了半日，耳根却清净下来。"
        }
      ]
    },
    rnd_red_bone_market: {
      generatedArt: false,
      title: "赤水骨市",
      tag: "随机路遇",
      pool: ["trade", "risk"],
      shjAnchor: { name: "赤水", type: "岸骨集市", mode: "地名引用" },
      risk: "medium",
      routeTags: ["red_marsh"],
      trigger: { phase: "mid_route" },
      weight: 18,
      cooldown: 2,
      texts: {
        clear: "赤水岸边摆着一排骨摊，摊主用指骨敲碗，只收粮，不收钱。",
        uneasy: "骨摊没有货，只有一排排刻着名字的骨头。摊主说名字也能换。",
        mad: "摊主都是骨头。他们敲碗问你们：要买路，还是买自己剩下的那截？"
      },
      choices: [
        {
          label: "以粮换骨",
          hint: "粮草 -5，车轴 +6",
          effect: { axle: 6, grain: -5, sanity: 0, badLuck: -2 },
          result: "你们用一袋粮换了一副旧骨楔。车轮压上赤水岸时，骨头比木头更稳。"
        },
        {
          label: "拾骨辨路",
          hint: "神志 -5，得幻路标记",
          effect: { axle: 0, grain: 0, sanity: -5, flag: "accepted_mirage" },
          result: "你们按骨头的朝向摆出一条线。线指向的地方，地图上什么也没有。"
        },
        {
          label: "不碰骨市",
          hint: "粮草 -2，神志 +3",
          effect: { axle: 0, grain: -2, sanity: 3 },
          result: "车队绕开骨摊。摊主敲了一路碗，一直敲到你们听不见。"
        }
      ]
    },
    rnd_stele_ink_well: {
      generatedArt: false,
      title: "断碑墨井",
      tag: "随机路遇",
      pool: ["clue", "sanity"],
      shjAnchor: { name: "巫咸", type: "墨井古辞", mode: "直名引用" },
      risk: "low",
      routeTags: ["broken_stele"],
      trigger: { phase: "mid_route" },
      weight: 18,
      cooldown: 2,
      texts: {
        clear: "断碑后有一口墨井，井水黑而不浊。井沿刻着半句巫辞。",
        uneasy: "墨井没有倒影。你们俯身时，井里只有一行正在写字的影子。",
        mad: "井在念你们的名字。每念一个，井水就浅一分。"
      },
      choices: [
        {
          label: "汲墨拓字",
          hint: "神志 -3，巫辞 +10",
          effect: { axle: 0, grain: 0, sanity: -3, language: { wuxian: 10 } },
          result: "你们用井墨拓下井沿的残字。巫辞补全一截，井水却在纸上留下第二行。"
        },
        {
          label: "以墨换粮",
          hint: "粮草 +5，神志 -4",
          effect: { axle: 0, grain: 5, sanity: -4 },
          result: "守井人收了墨，换给你们几袋干粮。粮袋上没有字，摸上去却像有笔画。"
        },
        {
          label: "封井",
          hint: "粮草 -2，神志 +4",
          effect: { axle: 0, grain: -2, sanity: 4, badLuck: -2 },
          result: "你们用石板压住井口。井里的写字声停了，断碑也不再渗墨。"
        }
      ]
    },
    rnd_qingqiu_lamp_debt: {
      generatedArt: false,
      title: "青丘灯债",
      tag: "随机路遇",
      pool: ["trade", "sanity"],
      shjAnchor: { name: "青丘", type: "狐灯", mode: "地名引用" },
      risk: "medium",
      routeTags: ["qingqiu_outer_city"],
      trigger: { phase: "mid_route" },
      weight: 18,
      cooldown: 2,
      texts: {
        clear: "青丘外邑的灯忽然全灭，只剩一盏跟着车队走。提灯人说，这盏灯是借的。",
        uneasy: "灯不照路，只照人脸。提灯人问你们要还灯，还是还一个名字。",
        mad: "灯里没有火，只有一只闭着的眼睛。它每眨一次，车队就少一个人影。"
      },
      choices: [
        {
          label: "借灯照路",
          hint: "神志 -4，车轴 +5",
          effect: { axle: 5, grain: 0, sanity: -4 },
          result: "灯影落在车辙上，路忽然变得很清楚。天亮时灯灭了，你们谁也没提还灯的事。"
        },
        {
          label: "还一盏灯",
          hint: "粮草 -4，神志 +4，狐尾灯痕",
          effect: { axle: 0, grain: -4, sanity: 4, flag: "fox_tail_mark" },
          result: "你们用粮换了一盏旧灯还回去。提灯人收灯时，灯芯里掉出一小截狐尾。"
        },
        {
          label: "灭灯过城",
          hint: "车轴 -2，神志 -3",
          effect: { axle: -2, grain: 0, sanity: -3 },
          result: "你们吹灭借来的灯，摸黑穿过外邑。灯灭了，路却没有完全黑下去。"
        }
      ]
    },
    rnd_qingqiu_name_toll: {
      generatedArt: false,
      title: "青丘还名",
      tag: "随机路遇",
      pool: ["clue", "trade"],
      shjAnchor: { name: "青丘", type: "假名与灯", mode: "地名引用" },
      risk: "low",
      routeTags: ["qingqiu_outer_city"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      texts: {
        clear: "青丘城门口摆着一张名册，守门人说，进出都要留一个名字。",
        uneasy: "名册上已经有你们的名字，字迹却不是你们写的。",
        mad: "守门人问：你们要还哪一个？你们才发现自己一路用了不止一个名字。"
      },
      choices: [
        {
          label: "还一个名字",
          hint: "神志 -3，得假名回声",
          effect: { axle: 0, grain: 0, sanity: -3, flag: "false_name_echo" },
          result: "你们从名册上划掉一个旧称。纸面发出很轻的一声，像有人替你们应了。"
        },
        {
          label: "以粮抵名",
          hint: "粮草 -4，神志 +2",
          effect: { axle: 0, grain: -4, sanity: 2 },
          result: "守门人收下粮，把名册往后翻了一页。你们没有留名，也没有被追问。"
        },
        {
          label: "不答名",
          hint: "粮草 +3，神志 -5",
          effect: { axle: 0, grain: 3, sanity: -5 },
          result: "你们不答名，只把粮袋推上桌。守门人笑了笑，从名册上撕下一角给你们。"
        }
      ]
    },
    rnd_mire_sunken_bell: {
      generatedArt: false,
      title: "白羽沉钟",
      tag: "随机路遇",
      pool: ["rest", "supply"],
      shjAnchor: { name: "白羽淖", type: "沉水古钟", mode: "地名引用" },
      risk: "low",
      routeTags: ["white_feather_mire"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      rescueCandidate: true,
      texts: {
        clear: "白羽淖水底露出一口钟，钟身裹满白羽。风过时，钟自己响了一声。",
        uneasy: "钟声从水下传来，比水面上的风慢半拍。每响一次，岸边的羽就少一片。",
        mad: "钟在水底敲，人在钟里走。你们听见自己的脚步从钟腹里传回来。"
      },
      choices: [
        {
          label: "捞钟",
          hint: "粮草 -3，车轴 +5",
          effect: { axle: 5, grain: -3, sanity: 0 },
          result: "你们把钟拖上岸，拆下钟耳做轮楔。钟腹里没有水，只有一层旧羽。"
        },
        {
          label: "听钟",
          hint: "粮草 -2，神志 +5",
          effect: { axle: 0, grain: -2, sanity: 5, badLuck: -3 },
          result: "你们在岸边听钟响了三声。随从说，第三声之后，队伍里没有人再听见水声。"
        },
        {
          label: "绕钟",
          hint: "粮草 +4，神志 -2",
          effect: { axle: 0, grain: 4, sanity: -2 },
          result: "车队绕开水域，在浅滩捡到几尾被钟声震晕的鱼。"
        }
      ]
    },
    rnd_central_old_ledger: {
      generatedArt: false,
      title: "驿账残页",
      tag: "随机路遇",
      pool: ["clue", "trade"],
      shjAnchor: { name: "中原驿", type: "旧驿账", mode: "地名引用" },
      risk: "low",
      routeTags: ["central_post"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      texts: {
        clear: "驿墙缝里掉出一页旧账，记着十几支西行车队的粮草与归期。",
        uneasy: "旧账上的归期全是同一天。你们翻到最后一行，看见自己车队的编号。",
        mad: "账页在自己写字。每写一个名字，驿门外就少一盏灯。"
      },
      choices: [
        {
          label: "翻驿账",
          hint: "神志 -3，得西行旧账",
          effect: { axle: 0, grain: 0, sanity: -3, flag: "old_account" },
          result: "你们把旧账翻完。最后几页的墨还是湿的，写着和你们一样的路线。"
        },
        {
          label: "以账换粮",
          hint: "粮草 +5，神志 -2",
          effect: { axle: 0, grain: 5, sanity: -2 },
          result: "驿卒收下旧账，换给你们几袋陈粮。他说这页账早就该有人带走。"
        },
        {
          label: "不翻",
          hint: "车轴 -1，神志 +2",
          effect: { axle: -1, grain: 0, sanity: 2 },
          result: "你们把账页塞回墙缝。车队重新整好车轴，没有再看那面墙。"
        }
      ]
    },
    rnd_market_salt_price: {
      generatedArt: false,
      title: "黑齿盐价",
      tag: "随机路遇",
      pool: ["trade", "supply"],
      shjAnchor: { name: "黑齿国", type: "盐市", mode: "直名引用" },
      risk: "low",
      routeTags: ["black_teeth_market"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      texts: {
        clear: "黑齿市口新摆一摊盐，盐粒黑得发亮。摊主说盐能定神，也能换粮。",
        uneasy: "盐摊不收钱，只收“还能记住的味道”。你们谁也没先开口。",
        mad: "盐粒在袋里自己动。摊主说，吃一口就能想起还没走过的路。"
      },
      choices: [
        {
          label: "买一包盐",
          hint: "粮草 -4，神志 +5",
          effect: { axle: 0, grain: -4, sanity: 5, badLuck: -2 },
          result: "盐入口极苦，随后回甘。随从说，至少今晚不会再梦见黑石路。"
        },
        {
          label: "把盐转卖",
          hint: "粮草 +7，神志 -4",
          effect: { axle: 0, grain: 7, sanity: -4 },
          result: "你们把盐转卖给下一支车队，赚了几袋粮。盐袋空了，嘴里却一直发苦。"
        },
        {
          label: "只看不买",
          hint: "车轴 -2，神志 +1",
          effect: { axle: -2, grain: 0, sanity: 1 },
          result: "你们看了很久，最后只买了一点路上用的粗盐。摊主没有多问。"
        }
      ]
    },
    rnd_shrine_ash_face: {
      generatedArt: false,
      title: "祠灰照面",
      tag: "随机路遇",
      pool: ["sanity", "rest"],
      shjAnchor: { name: "无名祠", type: "香灰照面", mode: "地名引用" },
      risk: "low",
      routeTags: ["nameless_shrine"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      rescueCandidate: true,
      texts: {
        clear: "祠里香灰积成一面薄镜。随从说，用灰照脸，能看见自己还剩多少神志。",
        uneasy: "灰面照出的脸比你们慢半拍。你们眨眼，它才眨。",
        mad: "灰里那张脸不是你们的。它先开口，问车队还缺几个人。"
      },
      choices: [
        {
          label: "以灰照面",
          hint: "神志 -4，得无名供位",
          effect: { axle: 0, grain: 0, sanity: -4, flag: "nameless_seat" },
          result: "你们逐个照过灰面。最后一个人照完，灰上多出一个没有脸的轮廓。"
        },
        {
          label: "供一捧粮",
          hint: "粮草 -3，神志 +5",
          effect: { axle: 0, grain: -3, sanity: 5, badLuck: -3 },
          result: "粮粒落进香灰，祠里安静下来。随从说，这一捧比符水管用。"
        },
        {
          label: "扫灰出门",
          hint: "粮草 +2，神志 +2",
          effect: { axle: 0, grain: 2, sanity: 2 },
          result: "你们把香灰扫到门外，在灰里捡到几枚旧铜钱，换了两把干粮。"
        }
      ]
    },
    rnd_qingqiu_lamp_moth: {
      generatedArt: false,
      title: "青丘灯蛾",
      tag: "随机路遇",
      pool: ["clue", "sanity"],
      shjAnchor: { name: "青丘", type: "狐灯飞蛾", mode: "地名引用" },
      risk: "low",
      routeTags: ["qingqiu_outer_city"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      texts: {
        clear: "狐灯下聚着一群白蛾，翅上各有一点朱砂。它们只朝西飞。",
        uneasy: "灯蛾落在车辕上，翅上的朱砂连成一条短线，指向没有路的地方。",
        mad: "蛾子从灯里飞出来，每一只都长着你们其中一人的脸。"
      },
      choices: [
        { label: "随蛾辨向", hint: "神志 -4，得狐尾灯痕", effect: { axle: 0, grain: 0, sanity: -4, flag: "fox_tail_mark" }, result: "你们跟着灯蛾走了一段。它们停在一处没有名字的岔口，翅上的朱砂同时暗了。" },
        { label: "扑灯收蛾", hint: "粮草 +4，神志 -2", effect: { axle: 0, grain: 4, sanity: -2 }, result: "蛾子入袋即化成细粉，青丘商人愿意用粮换。灯灭后，车队安静得过分。" },
        { label: "灭灯赶路", hint: "粮草 -2，神志 +3", effect: { axle: 0, grain: -2, sanity: 3 }, result: "你们吹灭狐灯，趁黑穿过外邑。灯蛾没有再跟上来。" }
      ]
    },
    rnd_pass_broken_arrow: {
      generatedArt: false,
      title: "废关断镞",
      tag: "随机路遇",
      pool: ["risk", "item"],
      shjAnchor: { name: "废关", type: "旧战遗镞", mode: "地名引用" },
      risk: "low",
      routeTags: ["abandoned_pass"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      texts: {
        clear: "关墙下露出半截断镞，锈得只剩锋尖。随从说，这一带曾经打过仗。",
        uneasy: "断镞一拔出来，关墙里就响起弓弦声。声音只有一下，却像等了很久。",
        mad: "满地都是断镞，每一支都对准车队。你们回头，关墙上没有弓手。"
      },
      choices: [
        { label: "收镞补轴", hint: "车轴 +5，粮草 -2", effect: { axle: 5, grain: -2, sanity: 0 }, result: "断镞熔了补进轴箍。车轮压过关道时，声音比先前硬。" },
        { label: "循镞辨阵", hint: "神志 -4，得山腹暗路", effect: { axle: 0, grain: 0, sanity: -4, flag: "hollow_pass_hint" }, result: "你们按断镞的朝向排出一条旧阵线。阵线尽头，关墙有一道被土封住的窄门。" },
        { label: "绕开关墙", hint: "粮草 -3，神志 +3", effect: { axle: 0, grain: -3, sanity: 3 }, result: "车队绕到关墙外。弓弦声没有追来，只在墙里轻轻断了一根。" }
      ]
    },
    rnd_burrow_rat_king: {
      generatedArt: false,
      title: "鸟鼠鼠王",
      tag: "随机路遇",
      pool: ["supply", "trade"],
      shjAnchor: { name: "鸟鼠同穴", type: "鼠王", mode: "直名引用" },
      risk: "low",
      routeTags: ["bird_mouse_pass"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      rescueCandidate: true,
      texts: {
        clear: "夹道中央坐着一只很老的鼠，胡须上串着铜钱。它身后的洞里堆着粮。",
        uneasy: "鼠王不跑，只看着你们。洞里传来许多细小的算盘声。",
        mad: "鼠王戴着你们其中一人的帽子。它问：今年轮到谁留下过冬？"
      },
      choices: [
        { label: "与鼠王换粮", hint: "粮草 +6，车轴 -2", effect: { axle: -2, grain: 6, sanity: 0 }, result: "你们用一截旧轴箍换了几袋粮。鼠王收下铁，把粮袋推到洞口。" },
        { label: "替鼠王清洞", hint: "粮草 -3，神志 +4", effect: { axle: 0, grain: -3, sanity: 4, badLuck: -2 }, result: "你们清开堵住洞口的碎石。鼠王没有道谢，只把一枚铜钱放在车辕上。" },
        { label: "赶鼠过道", hint: "车轴 +3，神志 -3", effect: { axle: 3, grain: 0, sanity: -3 }, result: "车队驱开鼠群，从洞口上方压过去。车轮轻了，洞里安静了很久。" }
      ]
    },
    rnd_shrine_back_road: {
      generatedArt: false,
      title: "祠后旧路",
      tag: "随机路遇",
      pool: ["clue", "rest"],
      shjAnchor: { name: "无名祠", type: "祠后旧道", mode: "地名引用" },
      risk: "low",
      routeTags: ["nameless_shrine"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      rescueCandidate: true,
      texts: {
        clear: "祠后有一道被香灰盖住的旧路，路砖比官道还老。",
        uneasy: "旧路上没有车辙，只有一排向祠内走的脚印。",
        mad: "旧路通向祠里，也通向你们身后。走上去的人会多出一个。"
      },
      choices: [
        { label: "走祠后旧路", hint: "车轴 +4，神志 -3", effect: { axle: 4, grain: 0, sanity: -3 }, result: "旧路短而硬，车轮很快绕过一段官道。出祠时，随从数了两遍人数。" },
        { label: "在祠后歇脚", hint: "神志 +5，粮草 -3", effect: { axle: 0, grain: -3, sanity: 5, badLuck: -2 }, result: "你们在旧路旁歇了一夜。香灰味压住了噩梦，粮袋轻了一角。" },
        { label: "把旧路封上", hint: "粮草 -2，神志 +2", effect: { axle: 0, grain: -2, sanity: 2 }, result: "你们搬砖封住旧路。祠里传来一声很轻的关门声。" }
      ]
    },
    rnd_market_bone_coin: {
      generatedArt: false,
      title: "黑齿骨钱",
      tag: "随机路遇",
      pool: ["trade", "supply"],
      shjAnchor: { name: "黑齿国", type: "骨钱", mode: "直名引用" },
      risk: "low",
      routeTags: ["black_teeth_market"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      texts: {
        clear: "黑齿市的找零是骨钱，钱孔里穿着头发。摊主说，骨钱只在市里通行。",
        uneasy: "骨钱入手很轻。你们数了三遍，数目每次都不一样。",
        mad: "骨钱在袋里互相说话。它们管你们叫“还没花掉的那一枚”。"
      },
      choices: [
        { label: "收下骨钱", hint: "粮草 +5，神志 -4", effect: { axle: 0, grain: 5, sanity: -4 }, result: "你们收下找零，换了几袋粮。骨钱在袋底响了一路。" },
        { label: "把骨钱花掉", hint: "车轴 +4，粮草 -3", effect: { axle: 4, grain: -3, sanity: 0 }, result: "你们用骨钱买了一副旧轴箍。摊主收钱时，骨孔里的头发少了一根。" },
        { label: "退回骨钱", hint: "神志 +4，粮草 -2", effect: { axle: 0, grain: -2, sanity: 4 }, result: "你们把骨钱退回去。摊主愣了一下，重新找了铜钱，数目终于对上了。" }
      ]
    },
    rnd_marsh_wildfire: {
      generatedArt: false,
      title: "雷泽野火",
      tag: "随机路遇",
      pool: ["risk", "supply"],
      shjAnchor: { name: "雷泽", type: "泽火", mode: "地名引用" },
      risk: "medium",
      routeTags: ["thunder_marsh"],
      trigger: { phase: "mid_route" },
      weight: 16,
      cooldown: 2,
      texts: {
        clear: "雷泽芦荡起了一线野火，火贴着水面烧，烟却往泥下走。",
        uneasy: "火没有温度，只有响声。你们靠近时，火线自动让开一条路。",
        mad: "火在水里烧，烧的是路。每烧过一里，地图就少一里。"
      },
      choices: [
        { label: "趁火线赶路", hint: "粮草 -2，车轴 +4", effect: { axle: 4, grain: -2, sanity: 0 }, result: "你们沿着火线让开的干地赶路，车轮没有再陷进泥里。" },
        { label: "抢收烤熟芦根", hint: "粮草 +7，神志 -3", effect: { axle: 0, grain: 7, sanity: -3 }, result: "芦根被烤得焦香，你们抢收了几捆。火线在身后慢慢合拢。" },
        { label: "退到泽外", hint: "粮草 -3，神志 +4", effect: { axle: 0, grain: -3, sanity: 4, badLuck: -2 }, result: "你们退到泽外等火过去。烟散了，泥地上多出一条没见过的硬路。" }
      ]
    },
    rnd_realm_shaxu: {
      generatedArt: false,
      title: "沙墟水囊",
      tag: "八域行纪",
      pool: ["supply", "rest"],
      risk: "low",
      routeTags: ["road"],
      trigger: { phase: "mid_route" },
      weight: 12,
      cooldown: 2,
      rescueCandidate: true,
      texts: {
        clear: "路上遇一支从沙墟退回来的驼队。领队说，沙下古河道还有水，但只够一队人。",
        uneasy: "驼队的水囊都空着，只有一只还沉。领队不肯说那只水囊是给谁留的。",
        mad: "他们从沙里挖出一只水囊，囊里装的不是水，是你们昨天倒掉的洗车水。"
      },
      choices: [
        { label: "分水救人", hint: "粮草 -3，神志 +5，记下沙墟人情", effect: { axle: 0, grain: -3, sanity: 5, flag: "old_account" }, result: "你们把水囊分给快渴死的行商。领队把沙墟旧路画在车板上，说以后有人问起，就说风宪郎来过。" },
        { label: "取古河道水", hint: "车轴 -2，粮草 +6", effect: { axle: -2, grain: 6, sanity: 0 }, result: "你们跟着驼队挖开沙下旧河床，灌满所有水囊。车轮陷了一次，粮袋却满了。" },
        { label: "留下水囊赶路", hint: "粮草 -2，神志 -4", effect: { axle: 0, grain: -2, sanity: -4 }, result: "你们留下半囊水，没有等驼队道谢。走出很远，还能听见沙下有水声。" }
      ]
    },
    rnd_realm_cangwu: {
      generatedArt: false,
      title: "苍梧瘴笛",
      tag: "八域行纪",
      pool: ["clue", "sanity"],
      risk: "medium",
      routeTags: ["water"],
      trigger: { phase: "mid_route" },
      weight: 12,
      cooldown: 2,
      texts: {
        clear: "南边来的采药人说，苍梧瘴气起时，云螭氏会用骨笛引路，笛声三短一长是安全。",
        uneasy: "他刚说完，林子里就响起三短一长。可这里没有林子，只有一片水泽。",
        mad: "骨笛声从你们每个人喉咙里响出来，音调各不相同。"
      },
      choices: [
        { label: "循骨笛声", hint: "神志 -4，得文鳐水痕", effect: { axle: 0, grain: 0, sanity: -4, flag: "wenao_trace" }, result: "你们按笛声绕过瘴气最浓的一段。采药人说，这不是苍梧的笛，是水泽在学它。" },
        { label: "采瘴边药草", hint: "粮草 +5，神志 -2", effect: { axle: 0, grain: 5, sanity: -2 }, result: "药草能换粮，也能压瘴。你们各采一束，谁也没有先闻。" },
        { label: "退到上风处", hint: "粮草 -3，神志 +4", effect: { axle: 0, grain: -3, sanity: 4, badLuck: -2 }, result: "车队退到上风处等瘴气散。多耗半日，人人神志清明。" }
      ]
    },
    rnd_realm_wanqiu: {
      generatedArt: false,
      title: "万丘海潮",
      tag: "八域行纪",
      pool: ["risk", "supply"],
      risk: "medium",
      routeTags: ["water"],
      trigger: { phase: "mid_route" },
      weight: 12,
      cooldown: 2,
      texts: {
        clear: "潮生族的潮伯说，万丘海退潮时能过礁，但只够一辆车。",
        uneasy: "潮伯不收钱，只问你们敢不敢在蓝火亮起前回来。",
        mad: "礁石上全是搁浅的船，船里坐着和你们一样等潮的人。"
      },
      choices: [
        { label: "候潮过礁", hint: "粮草 -2，车轴 +5", effect: { axle: 5, grain: -2, sanity: 0 }, result: "你们等潮退到最低，沿潮伯指的礁缝过去。车轮没有沾水，轴却像被盐洗过。" },
        { label: "趁蓝火采珠", hint: "粮草 +7，神志 -4", effect: { axle: 0, grain: 7, sanity: -4 }, result: "蓝火亮起时，你们从礁缝里摸出几枚旧珠。潮伯背过身，没有看。" },
        { label: "等下一次潮", hint: "粮草 -3，神志 +3", effect: { axle: 0, grain: -3, sanity: 3 }, result: "你们退回岸上等下一次潮。多耗一日，却避开了最急的暗流。" }
      ]
    },
    rnd_realm_xuansu: {
      generatedArt: false,
      title: "玄素冰契",
      tag: "八域行纪",
      pool: ["rest", "item"],
      risk: "low",
      routeTags: ["road"],
      trigger: { phase: "mid_route" },
      weight: 12,
      cooldown: 2,
      rescueCandidate: true,
      texts: {
        clear: "玄冰氏的雪鹫落在路旁，脚上系着一枚鱼骨契：借冰道可以，须留一件铁器。",
        uneasy: "鱼骨契上的刻痕和你们车轮的裂纹一模一样。",
        mad: "雪鹫开口说人话，问你们要借路，还是借一副不怕冷的骨头。"
      },
      choices: [
        { label: "留铁借冰道", hint: "车轴 +5，粮草 -2", effect: { axle: 5, grain: -2, sanity: 0 }, result: "你们留下一枚旧轴箍。雪鹫衔起铁器，带车队从冰面上直穿过去。" },
        { label: "替雪鹫修契", hint: "神志 +5，粮草 -3", effect: { axle: 0, grain: -3, sanity: 5, badLuck: -2 }, result: "你们把鱼骨契上的裂痕重新刻好。玄冰氏送了一小袋冻鱼，队伍缓过气来。" },
        { label: "绕开冰道", hint: "车轴 -3，神志 +2", effect: { axle: -3, grain: 0, sanity: 2 }, result: "你们绕开冰道，多走了半日硬路。雪鹫在头顶跟了一段，才转向北去。" }
      ]
    },
    rnd_realm_chixiao: {
      generatedArt: false,
      title: "赤霄淬火",
      tag: "八域行纪",
      pool: ["item", "risk"],
      risk: "medium",
      routeTags: ["rift"],
      trigger: { phase: "mid_route" },
      weight: 12,
      cooldown: 2,
      texts: {
        clear: "火正氏的匠人说，赤霄谷的琉璃石柱能淬轴，但入谷的人要留一件东西。",
        uneasy: "匠人面具下没有呼吸声。他手里的铁钳还夹着一段没冷透的车轴。",
        mad: "石柱在敲自己。每响一次，你们的车轮就热一分。"
      },
      choices: [
        { label: "以粮换淬火", hint: "粮草 -4，车轴 +8", effect: { axle: 8, grain: -4, sanity: 0 }, result: "匠人收粮，把车轴浸进琉璃石柱的冷泉。轴色变深，响声也沉了。" },
        { label: "入谷取琉璃", hint: "神志 -4，粮草 +6", effect: { axle: 0, grain: 6, sanity: -4 }, result: "你们趁匠人不备，从谷口捡了几块碎琉璃。回头时，匠人还站在原地，没有追。" },
        { label: "绕谷而行", hint: "粮草 -3，神志 +3", effect: { axle: 0, grain: -3, sanity: 3 }, result: "车队绕开赤霄谷。硫磺味淡下去时，车轮也不再发烫。" }
      ]
    },
    rnd_realm_luochen: {
      generatedArt: false,
      title: "洛尘过路礼",
      tag: "八域行纪",
      pool: ["clue", "sanity"],
      risk: "low",
      routeTags: ["rift"],
      trigger: { phase: "mid_route" },
      weight: 12,
      cooldown: 2,
      texts: {
        clear: "荒原上遇一个从洛尘回来的行脚人。他说进废墟要投钱，出废墟不能回头。",
        uneasy: "行脚人已经投过钱，袋里却还有一枚同样的铜钱。",
        mad: "他问你们：如果瓦当上刻着你们的名字，还算不算拾取？"
      },
      choices: [
        { label: "依礼过墟", hint: "神志 +4，粮草 -1", effect: { axle: 0, grain: -1, sanity: 4, badLuck: -2 }, result: "你们在井边石台放下一枚铜钱，出墟时没有回头。风沙没有追来。" },
        { label: "拾一块瓦当", hint: "神志 -5，得裂隙名", effect: { axle: 0, grain: 0, sanity: -5, flag: "rift_name" }, result: "瓦当上刻着一行小字，正是你们这一路走过的地名。你们把它收进车箱，谁也没有再提回头的事。" },
        { label: "不进废墟", hint: "车轴 -2，粮草 +3", effect: { axle: -2, grain: 3, sanity: 0 }, result: "你们绕开洛尘故墟，在荒原边缘捡到几袋遗落的干粮。废墟在身后一直很安静。" }
      ]
    },
    rnd_realm_cuiyou: {
      generatedArt: false, title: "翠幽菌田", tag: "八域行纪", pool: ["supply","clue"], risk: "low",
      routeTags: ["water"], trigger: { phase: "mid_route" }, weight: 10, cooldown: 2, rescueCandidate: true,
      texts: { clear: "林中菌田泛蓝光，青木氏说循光可找到水，但不可采头一茬。", uneasy: "蓝光跟着你们的脚步移动，像有人举灯在前面引路。", mad: "菌田里长出一排小祠，每座祠里都坐着一名随从。" },
      choices: [
        { label: "循光找水", hint: "粮草 +5，神志 -2", effect: { axle: 0, grain: 5, sanity: -2 }, result: "你们循蓝光找到一眼冷泉，灌满水囊。头一茬菌菇留在原地，没有采。" },
        { label: "采头茬菌", hint: "粮草 +7，神志 -4", effect: { axle: 0, grain: 7, sanity: -4 }, result: "头茬菌菇入口极鲜。走出菌田后，队伍里没有人记得昨夜谁守夜。" }
      ]
    },
    rnd_realm_fenghuo: {
      generatedArt: false, title: "烽沙火", tag: "八域行纪", pool: ["rest","clue"], risk: "low",
      routeTags: ["road"], trigger: { phase: "mid_route" }, weight: 10, cooldown: 2,
      texts: { clear: "沙丘最高处燃着烽沙火，流沙氏围火而坐，火灭前不许言语。", uneasy: "火堆旁留了一个空位，正好够你们车队的人坐。", mad: "火里烧的是沙，烟里站着一排没有影子的送行者。" },
      choices: [
        { label: "入座守夜", hint: "神志 +4，粮草 -3", effect: { axle: 0, grain: -3, sanity: 4, badLuck: -2 }, result: "你们按流沙氏的规矩坐到火灭。无人说话，沙下却像有人替你们应了名。" },
        { label: "借火辨星", hint: "车轴 +3，神志 -2", effect: { axle: 3, grain: 0, sanity: -2 }, result: "你们借火光辨出北斗，校正了车辙。火灭时，流沙氏已经收起沙帐。" }
      ]
    },
    rnd_realm_huangu: {
      generatedArt: false, title: "苍梧换骨", tag: "八域行纪", pool: ["sanity","clue"], risk: "medium",
      routeTags: ["water"], trigger: { phase: "mid_route" }, weight: 10, cooldown: 2,
      texts: { clear: "云螭氏少女在密林边等你们，说她梦见一头骨的来历，却不敢独自去石台。", uneasy: "她骨笛上的刻痕与你们车轴裂纹一致。林中有蛇，却不靠近她。", mad: "石台上那具骨坐了起来，问你们谁愿意替它做梦。" },
      choices: [
        { label: "陪她入林", hint: "神志 -4，得蛇蛊线索", effect: { axle: 0, grain: 0, sanity: -4, flag: "wenao_trace" }, result: "你们陪她走到石台。她整夜未醒，天亮时说梦见一条没有鳞的蛇。", },
        { label: "替她守台", hint: "粮草 -3，神志 +3", effect: { axle: 0, grain: -3, sanity: 3 }, result: "你们守在林外，没有看石台。少女出来时，骨笛上多了一个新孔。" }
      ]
    },
    rnd_realm_liudeng: {
      generatedArt: false, title: "万丘流灯", tag: "八域行纪", pool: ["supply","sanity"], risk: "low",
      routeTags: ["water"], trigger: { phase: "mid_route" }, weight: 10, cooldown: 2, rescueCandidate: true,
      texts: { clear: "潮生族在滩涂放流灯，灯灭为吉。你们的车队被邀去守一夜。", uneasy: "一盏灯逆潮漂回来，灯芯还是热的。", mad: "所有流灯都朝你们漂来，灯下压着写有你们名字的贝壳。" },
      choices: [
        { label: "守灯到灭", hint: "神志 +5，粮草 -2", effect: { axle: 0, grain: -2, sanity: 5, badLuck: -2 }, result: "你们守到灯灭。潮生族分来烤鱼，说这一年海神没有拒绝。" },
        { label: "捞回逆潮灯", hint: "粮草 +6，神志 -3", effect: { axle: 0, grain: 6, sanity: -3 }, result: "你们把逆潮灯捞回岸。灯下贝壳里有一小袋干贝，壳面刻着陌生名字。" }
      ]
    },
    rnd_realm_zaobing: {
      generatedArt: false, title: "玄素凿冰", tag: "八域行纪", pool: ["item","rest"], risk: "low",
      routeTags: ["road"], trigger: { phase: "mid_route" }, weight: 10, cooldown: 2,
      texts: { clear: "玄冰氏在冰窟前凿冰祭，选一枚最通透的冰晶投入天池，外人须闭目一炷香。", uneasy: "冰晶里封着一小段官道，路上有你们的车。", mad: "天池回响很久，回声里有人在数你们的人数。" },
      choices: [
        { label: "闭目守礼", hint: "神志 +4，车轴 -2", effect: { axle: -2, grain: 0, sanity: 4 }, result: "你们闭目立了一炷香。礼毕睁眼，冰窟里多出一条可走的冰道。" },
        { label: "请一枚冰晶", hint: "车轴 +5，粮草 -3", effect: { axle: 5, grain: -3, sanity: 0 }, result: "你们用粮换了一枚碎冰晶，嵌在轴箍上。车轮过冰时不再打滑。" }
      ]
    },
    rnd_realm_wumian: {
      generatedArt: false, title: "赤霄无面村", tag: "八域行纪", pool: ["risk","clue"], risk: "medium",
      routeTags: ["rift"], trigger: { phase: "mid_route" }, weight: 10, cooldown: 2,
      texts: { clear: "赤霄谷深处有一排无门无顶的石屋，屋里人都在劳作，却无人应声。", uneasy: "你们拍了一个人的肩，那户人家同时摆出同样的动作。", mad: "所有石屋里的人都是你们的姿势。细线从他们手脚连到车辕。" },
      choices: [
        { label: "退步出村", hint: "神志 +3，粮草 -2", effect: { axle: 0, grain: -2, sanity: 3 }, result: "你们连退数十步，退出石屋之间。细线断了，村里重新响起劳作声。" },
        { label: "循线找源", hint: "神志 -5，得裂隙名", effect: { axle: 0, grain: 0, sanity: -5, flag: "rift_name" }, result: "你们循细线摸到村后，看见一根琉璃柱上刻着所有石屋的名字，最后一行是你们。" }
      ]
    },
    rnd_realm_fanshui: {
      generatedArt: false, title: "洛尘翻水", tag: "八域行纪", pool: ["clue","sanity"], risk: "low",
      routeTags: ["rift"], trigger: { phase: "mid_route" }, weight: 10, cooldown: 2,
      texts: { clear: "霜降夜，洛尘古井自己翻水，水色暗红，天明复清。行脚人劝你们别过夜。", uneasy: "井水翻涌时，井底石龙头像抬了一下。", mad: "井里映出的不是你们，是一支还在赶路的车队。" },
      choices: [
        { label: "连夜过墟", hint: "粮草 -3，神志 +3", effect: { axle: 0, grain: -3, sanity: 3 }, result: "你们连夜穿过废墟，没有在井边停。天明时水色已清，像什么都没发生。" },
        { label: "留井边等清", hint: "神志 -4，得裂隙名", effect: { axle: 0, grain: 0, sanity: -4, flag: "rift_name" }, result: "你们守在井边看水由红转清。井底石龙嘴里含着一枚瓦当，上面刻着你们来路。" }
      ]
    },
    rnd_realm_qinling: {
      generatedArt: false, title: "秦岭追兵", tag: "八域行纪", pool: ["risk","supply"], risk: "medium",
      routeTags: ["road"], trigger: { phase: "mid_route" }, weight: 10, cooldown: 2,
      texts: { clear: "秦岭官道上出现一队没有旗号的骑兵，速度不快，却一直跟着车队。", uneasy: "他们不追近，也不落后，只在你们歇脚时歇脚。", mad: "骑兵的脸都朝着同一个方向，像在等你们先走错路。" },
      choices: [
        { label: "弃小道走官道", hint: "粮草 -4，车轴 +5", effect: { axle: 5, grain: -4, sanity: 0 }, result: "你们弃了小道，硬走官道。骑兵在岔口停住，没有跟上来。" },
        { label: "留一人断后", hint: "神志 -5，得韩党线索", effect: { axle: 0, grain: 0, sanity: -5, flag: "old_order" }, result: "你们留下一人假作掉队，引开骑兵。那人回来时，带回一枚韩党私兵的铜符。" }
      ]
    },
    rnd_central_riders: {
      generatedArt: false, title: "驿路骑手", tag: "路遇", pool: ["risk","clue"], risk: "low",
      routeTags: ["central_post"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "三名骑手从驿路追上来，说前方关隘要验风宪司的文牒。", uneasy: "骑手不报姓名，只看车上的箱笼。他们知道箱里有多少卷纸。", mad: "骑手的马没有影子。他们问：你们记录的是路，还是被路记录？" },
      choices: [
        { label: "出示文牒", hint: "粮草 -2，神志 +3", effect: { axle: 0, grain: -2, sanity: 3 }, result: "骑手验过文牒，放车队先行。临走时，其中一人多看了一眼采风箱。" },
        { label: "绕小道", hint: "车轴 -3，粮草 +3", effect: { axle: -3, grain: 3, sanity: 0 }, result: "你们绕开驿路，在小道上捡到骑手遗落的一袋干粮。关隘在后视里变小。" }
      ]
    },
    rnd_qingqiu_mask: {
      generatedArt: false, title: "青丘面具", tag: "路遇", pool: ["trade","sanity"], risk: "low",
      routeTags: ["qingqiu_outer_city"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "青丘市口卖一种薄面具，戴上就能说别人的名字。摊主只收粮。", uneasy: "面具内侧刻着你们其中一人的旧称。", mad: "所有面具都朝你们转过来，像在等谁先戴上。" },
      choices: [
        { label: "买一张面具", hint: "粮草 -4，神志 +4", effect: { axle: 0, grain: -4, sanity: 4 }, result: "你们买下一张无字面具。戴上时，街上的狐灯都暗了一瞬。" },
        { label: "卖旧名换粮", hint: "粮草 +6，神志 -4", effect: { axle: 0, grain: 6, sanity: -4 }, result: "你们把一个不用的旧称卖给摊主。粮袋满了，回程时却没人应那个名字。" }
      ]
    },
    rnd_shrine_bell: {
      generatedArt: false, title: "祠钟", tag: "路遇", pool: ["rest","clue"], risk: "low",
      routeTags: ["nameless_shrine"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2, rescueCandidate: true,
      texts: { clear: "无名祠檐下挂着一口小钟，风过不响，人过才响。", uneasy: "钟声只响在你们经过之后，像替车队数人数。", mad: "钟里没有钟舌，声音却从每个人胸腔里出来。" },
      choices: [
        { label: "敲钟问路", hint: "神志 -3，得无名供位", effect: { axle: 0, grain: 0, sanity: -3, flag: "nameless_seat" }, result: "钟声散开，祠后显出一段短路。随从说，这段路是给没有名字的人走的。" },
        { label: "在祠檐歇脚", hint: "粮草 -3，神志 +5", effect: { axle: 0, grain: -3, sanity: 5, badLuck: -2 }, result: "你们在钟下歇了一夜。钟没有响，噩梦也没有来。" }
      ]
    },
    rnd_pass_toll: {
      generatedArt: false, title: "废关关钱", tag: "路遇", pool: ["trade","risk"], risk: "low",
      routeTags: ["abandoned_pass"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "废关下坐着个老人，说关门可以开，但要补一笔旧关钱。", uneasy: "老人脚边堆着历代车队的车轴箍，每一枚都锈成同一年。", mad: "老人没有脸，手里却拿着你们的通关文牒。" },
      choices: [
        { label: "补关钱", hint: "粮草 -3，车轴 +3", effect: { axle: 3, grain: -3, sanity: 0 }, result: "老人收粮，搬开半截门木。关门后，旧令上的字淡了一笔。" },
        { label: "拆门木修车", hint: "车轴 +5，神志 -2", effect: { axle: 5, grain: 0, sanity: -2 }, result: "你们没有补钱，拆了半截门木做轮楔。老人在背后数了很久。" }
      ]
    },
    rnd_burrow_eggs: {
      generatedArt: false, title: "鸟鼠卵", tag: "路遇", pool: ["supply","risk"], risk: "low",
      routeTags: ["bird_mouse_pass"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2, rescueCandidate: true,
      texts: { clear: "夹道石缝里有一窝鸟卵，旁边堆着鼠类储粮。取一留一，是山里的规矩。", uneasy: "卵壳上有细小的牙印。母鸟在远处看着，没有叫。", mad: "每枚卵里都有一只睁开的眼，正数你们取了几枚。" },
      choices: [
        { label: "取卵留粮", hint: "粮草 +6，神志 -2", effect: { axle: 0, grain: 6, sanity: -2 }, result: "你们取了一半鸟卵，留下半袋干粮。母鸟等车队走远才落下。" },
        { label: "只取鼠储粮", hint: "粮草 +4，车轴 +2", effect: { axle: 2, grain: 4, sanity: 0 }, result: "你们没有碰鸟卵，只取走鼠类储粮。石缝里安静下来。" }
      ]
    },
    rnd_market_teeth: {
      generatedArt: false, title: "黑齿换牙", tag: "路遇", pool: ["trade","sanity"], risk: "medium",
      routeTags: ["black_teeth_market"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "黑齿商人愿用粮换一颗“还没用过的牙”，说是要替孩子种一颗新齿。", uneasy: "他们不要钱，只要你们开口笑一笑。", mad: "商人的嘴里全是你们的牙。他们问：哪一颗还没咬过东西？" },
      choices: [
        { label: "换一颗牙", hint: "粮草 +7，神志 -4", effect: { axle: 0, grain: 7, sanity: -4 }, result: "你们换了一颗牙，得了几袋粮。此后说话时，总觉得少了一个音。" },
        { label: "不换", hint: "粮草 -2，神志 +3", effect: { axle: 0, grain: -2, sanity: 3 }, result: "你们没有开口。商人也不勉强，只把粮价抬了一点。" }
      ]
    },
    rnd_marsh_boat: {
      generatedArt: false, title: "泽舟", tag: "路遇", pool: ["risk","supply"], risk: "medium",
      routeTags: ["thunder_marsh"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "雷泽浅畔停着一艘无主小舟，船底刻着“借水一程，还粮一袋”。", uneasy: "舟里有一层新泥，像刚有人坐过。", mad: "小舟自己在水上走，船头朝着你们昨夜梦里的方向。" },
      choices: [
        { label: "借舟渡水", hint: "车轴 +5，粮草 -2", effect: { axle: 5, grain: -2, sanity: 0 }, result: "你们推舟下水，车轮架在船板上，稳稳过了最深的浅洼。" },
        { label: "拆舟取板", hint: "车轴 +4，神志 -3", effect: { axle: 4, grain: 0, sanity: -3 }, result: "你们拆了船板做轮楔。船底的字被踩进泥里，水声忽然近了一寸。" }
      ]
    },
    rnd_stele_echo: {
      generatedArt: false, title: "碑回声", tag: "路遇", pool: ["clue","sanity"], risk: "low",
      routeTags: ["broken_stele"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "断碑前有人念名，念完一遍，碑后也念一遍，只是慢半拍。", uneasy: "回声念到最后，多出一个不属于车队的人名。", mad: "碑在念你们还没说出口的名字。念到谁，谁就少一段记忆。" },
      choices: [
        { label: "应回声", hint: "神志 -4，巫辞 +8", effect: { axle: 0, grain: 0, sanity: -4, language: { wuxian: 8 } }, result: "你们跟着回声念完一遍。碑文里几个缺字忽然补齐，多出的那个名字却没有消失。" },
        { label: "止声过碑", hint: "粮草 -2，神志 +4", effect: { axle: 0, grain: -2, sanity: 4 }, result: "你们用布塞住碑缝，回声低下去。过碑时，谁也没有回头。" }
      ]
    },
    rnd_qingqiu_tail: { generatedArt:false, title:"青丘尾火", tag:"路遇", pool:["sanity","clue"], risk:"low", routeTags:["qingqiu_outer_city"], trigger:{phase:"mid_route"}, weight:8, cooldown:2,
      texts:{clear:"狐灯尾巴上拖着一线火，火不烧人，只烧影子。", uneasy:"你们的影子被火舌舔短了一截。", mad:"九条尾巴在灯后展开，每条都挂着一个人的名字。"},
      choices:[{label:"循尾火",hint:"神志 -3，得狐尾灯痕",effect:{axle:0,grain:0,sanity:-3,flag:"fox_tail_mark"},result:"你们跟着尾火绕过一段暗巷。灯灭时，巷口多出一条没走过的路。"},{label:"避开尾火",hint:"粮草 -2，神志 +3",effect:{axle:0,grain:-2,sanity:3},result:"车队避开尾火，从外邑大道走。灯影在墙上追了一段，才散。"}]},
    rnd_pass_seal: { generatedArt:false, title:"废关封泥", tag:"路遇", pool:["clue","trade"], risk:"low", routeTags:["abandoned_pass"], trigger:{phase:"mid_route"}, weight:8, cooldown:2,
      texts:{clear:"关门上新糊了一块封泥，印着风宪司的旧纹。", uneasy:"封泥还是湿的，印纹里却有你们的指印。", mad:"封泥下压着一张脸，正从门缝里看你们。"},
      choices:[{label:"拓下封泥",hint:"神志 -2，巫辞 +6",effect:{axle:0,grain:0,sanity:-2,language:{wuxian:6}},result:"你们把封泥拓在纸上。旧纹里有一道不属于风宪司的刻痕。"},{label:"揭泥开门",hint:"车轴 +4，粮草 -2",effect:{axle:4,grain:-2,sanity:0},result:"你们揭开封泥，推开半扇门。门后没有守关人，只有一段干硬官道。"}]},
    rnd_burrow_wind: { generatedArt:false, title:"鸟鼠穴风", tag:"路遇", pool:["supply","rest"], risk:"low", routeTags:["bird_mouse_pass"], trigger:{phase:"mid_route"}, weight:8, cooldown:2, rescueCandidate:true,
      texts:{clear:"山腹风从鼠洞里灌出来，带着干草与粮壳的气味。", uneasy:"风里有一声很长的叹息，像谁在洞里翻身。", mad:"洞里吹出的不是风，是你们昨夜说过的梦话。"},
      choices:[{label:"循风找干草",hint:"粮草 +6，神志 -2",effect:{axle:0,grain:6,sanity:-2},result:"你们循风找到一洞干草，足够垫车与引火。洞深处有鼠影一闪。"},{label:"堵洞歇脚",hint:"神志 +4，车轴 -2",effect:{axle:-2,grain:0,sanity:4},result:"你们用石块堵住风口，在背风处歇了一夜。洞里没有再出声。"}]},
    rnd_market_scale: { generatedArt:false, title:"黑齿鳞秤", tag:"路遇", pool:["trade","risk"], risk:"medium", routeTags:["black_teeth_market"], trigger:{phase:"mid_route"}, weight:8, cooldown:2,
      texts:{clear:"黑齿市口摆着一杆鳞秤，秤盘里压着青鳞，秤砣是一截指骨。", uneasy:"秤自己往你们这边沉，像称出了看不见的重量。", mad:"鳞秤在称你们的名字。每称一次，秤砣就轻一分。"},
      choices:[{label:"以粮压秤",hint:"粮草 -5，车轴 +5",effect:{axle:5,grain:-5,sanity:0},result:"你们用粮压住秤盘，换了一副旧轴箍。秤砣在收摊时裂成两半。"},{label:"不称",hint:"粮草 +3，神志 -3",effect:{axle:0,grain:3,sanity:-3},result:"你们没有上秤，只把粮袋推过去。商人收粮，秤盘一直空着。"}]},
    rnd_marsh_mist: { generatedArt:false, title:"雷泽雾", tag:"路遇", pool:["clue","sanity"], risk:"low", routeTags:["thunder_marsh"], trigger:{phase:"mid_route"}, weight:8, cooldown:2,
      texts:{clear:"泽雾贴着水面起来，雾里有一排芦火，像有人替车队点灯。", uneasy:"芦火不动，雾却在走。走近时，火下没有灯芯。", mad:"雾里站着另一支车队，正沿着你们的车辙往回走。"},
      choices:[{label:"循芦火",hint:"神志 -3，得文鳐水痕",effect:{axle:0,grain:0,sanity:-3,flag:"wenao_trace"},result:"你们跟着芦火走出浅滩。回头时，火已经灭了，泥上留下鱼鳞印。"},{label:"等雾散",hint:"粮草 -3，神志 +4",effect:{axle:0,grain:-3,sanity:4},result:"你们退到高处等雾散。多耗半日，却看清了真正的浅路。"}]},
    rnd_mire_feather: { generatedArt:false, title:"白羽换羽", tag:"路遇", pool:["supply","clue"], risk:"low", routeTags:["white_feather_mire"], trigger:{phase:"mid_route"}, weight:8, cooldown:2,
      texts:{clear:"淖边有人收集沉羽，说白羽能换粮，也能换一次问路的机会。", uneasy:"收羽人只收自己沉下去的羽，别人捞起来的不算。", mad:"收羽人的袖子里全是羽毛，每一片都写着你们的名字。"},
      choices:[{label:"以羽换粮",hint:"粮草 +6，神志 -2",effect:{axle:0,grain:6,sanity:-2},result:"你们交出一束沉羽，换回几袋粮。收羽人把羽按名字分开放。"},{label:"请指一条路",hint:"神志 +3，车轴 -2",effect:{axle:-2,grain:0,sanity:3},result:"你们不换粮，只请收羽人指路。他指向淖心，说那里有一条沉下去的路。"}]},
    rnd_stele_moss: { generatedArt:false, title:"断碑苔", tag:"路遇", pool:["rest","clue"], risk:"low", routeTags:["broken_stele"], trigger:{phase:"mid_route"}, weight:8, cooldown:2, rescueCandidate:true,
      texts:{clear:"断碑背阴长满苔，苔下透出几行旧字。", uneasy:"苔是温的，像刚从人手里揭下来。", mad:"苔在碑上慢慢拼成你们的名字，一笔一笔。"},
      choices:[{label:"刮苔读字",hint:"神志 -3，巫辞 +7",effect:{axle:0,grain:0,sanity:-3,language:{wuxian:7}},result:"你们刮开苔衣，读出一段残缺巫辞。字迹干后，苔又慢慢合上。"},{label:"取苔敷伤",hint:"粮草 -2，神志 +5",effect:{axle:0,grain:-2,sanity:5},result:"你们取苔敷在随从的冻伤上。苔很快干了，伤口却不再渗血。"}]},
    rnd_dream_lamp: { generatedArt:false, title:"梦驿灯", tag:"路遇", pool:["sanity","supply"], risk:"low", routeTags:["dream_map_post"], trigger:{phase:"mid_route"}, weight:8, cooldown:2,
      texts:{clear:"梦图驿外挂着一盏不亮的灯，灯下放着半袋粮。", uneasy:"灯没有火，灯罩里却有一小团影子在动。", mad:"灯里的人问：你们要点亮我，还是带走粮？"},
      choices:[{label:"点亮灯",hint:"神志 +4，粮草 -2",effect:{axle:0,grain:-2,sanity:4},result:"你们点亮灯，影子安静下来。驿里传来一声很轻的谢。"},{label:"带走半袋粮",hint:"粮草 +6，神志 -3",effect:{axle:0,grain:6,sanity:-3},result:"你们带走粮，没有点灯。走出很远，灯罩里的影子还在看。"}]},
    rnd_red_salt: { generatedArt:false, title:"赤水盐", tag:"路遇", pool:["trade","sanity"], risk:"low", routeTags:["red_marsh"], trigger:{phase:"mid_route"}, weight:8, cooldown:2,
      texts:{clear:"赤水退后，岸上结了一层白盐。当地人说盐能压神，也能换粮。", uneasy:"盐层下有骨头形状的空洞，风一过就响。", mad:"盐从水里长出来，长成你们每个人的侧脸。"},
      choices:[{label:"刮盐换粮",hint:"粮草 +6，神志 -3",effect:{axle:0,grain:6,sanity:-3},result:"你们刮了几袋岸盐，换了干粮。盐袋压在车底，一路发出细响。"},{label:"撒盐安神",hint:"神志 +5，粮草 -2",effect:{axle:0,grain:-2,sanity:5},result:"你们沿车辙撒了一圈盐。夜里没有人梦见赤水。"}]},
    rnd_ridge_wind: { generatedArt:false, title:"山脊风", tag:"路遇", pool:["risk","rest"], risk:"low", routeTags:["old_king_road"], trigger:{phase:"mid_route"}, weight:8, cooldown:2,
      texts:{clear:"山脊风把车帘掀开，风里有旧王朝的鼓角声。", uneasy:"鼓角声只响在你们停车时，走起来就停。", mad:"风里有整支军队在走，脚步声和你们一致。"},
      choices:[{label:"顶风赶路",hint:"车轴 +4，神志 -3",effect:{axle:4,grain:0,sanity:-3},result:"你们顶风翻过山脊。鼓角声在背后散了，车轮却轻了。"},{label:"背风扎营",hint:"粮草 -3，神志 +4",effect:{axle:0,grain:-3,sanity:4,badLuck:-2},result:"你们背风扎营，听了一夜鼓角。天亮时，风停了。"}]},
    rnd_ford_net: {
      generatedArt: false, title: "羽民渡网", tag: "路遇", pool: ["supply","clue"], risk: "low",
      routeTags: ["feather_folk_ford"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2, rescueCandidate: true,
      texts: { clear: "羽民在渡口收网，网里除了鱼还有一枚旧铜印。", uneasy: "收网人把铜印递给你们，说它每年都会回到网里。", mad: "网里全是闭着的眼，收网人却问你们要不要放生。" },
      choices: [
        { label: "买下铜印", hint: "粮草 -4，神志 +3", effect: { axle: 0, grain: -4, sanity: 3, flag: "old_order" }, result: "你们用粮换下铜印。印面刻着风宪司的旧职，边角被鱼线磨圆。" },
        { label: "帮收网分鱼", hint: "粮草 +6，车轴 -2", effect: { axle: -2, grain: 6, sanity: 0 }, result: "你们帮羽民收网分鱼，换回几袋鱼干。铜印被重新抛回水里。" }
      ]
    },
    rnd_black_salt: {
      generatedArt: false, title: "黑齿盐井", tag: "路遇", pool: ["trade","risk"], risk: "low",
      routeTags: ["black_teeth_market"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "黑齿市后的盐井泛着灰白，井口压着一块刻牙的石板。", uneasy: "石板上的牙印和你们随从的齿列一样。", mad: "井里有人在嚼盐，嚼一下，你们的嘴就干一分。" },
      choices: [
        { label: "换一袋井盐", hint: "粮草 +5，神志 -3", effect: { axle: 0, grain: 5, sanity: -3 }, result: "你们用旧铁换了一袋井盐。盐粒粗硬，压得住粮，也压得住梦。" },
        { label: "替他们封井", hint: "车轴 +4，粮草 -2", effect: { axle: 4, grain: -2, sanity: 0 }, result: "你们帮黑齿人把石板重新压好。井底安静下去，车轴却像被盐水浸过。" }
      ]
    },
    rnd_marsh_lantern: {
      generatedArt: false, title: "雷泽河灯", tag: "路遇", pool: ["rest","sanity"], risk: "low",
      routeTags: ["thunder_marsh"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2, rescueCandidate: true,
      texts: { clear: "雷泽岸边漂着几十盏河灯，灯下压着写给人间的名字。", uneasy: "有一盏灯逆流回来，灯纸上的名字被水泡开，仍能认出你们的姓。", mad: "所有河灯都朝岸上漂，灯芯烧的是你们昨夜说过的话。" },
      choices: [
        { label: "放一盏灯", hint: "粮草 -2，神志 +5", effect: { axle: 0, grain: -2, sanity: 5, badLuck: -2 }, result: "你们放下一盏无名灯。灯顺流走远，泽上的雾散了一线。" },
        { label: "捞灯取纸", hint: "粮草 +5，神志 -3", effect: { axle: 0, grain: 5, sanity: -3 }, result: "你们捞起几盏灯，把灯纸晒干当引火。纸上的名字烧起来时，泽里有人叹气。" }
      ]
    },
    rnd_dream_ledger: {
      generatedArt: false, title: "梦驿旧账", tag: "路遇", pool: ["clue","trade"], risk: "low",
      routeTags: ["dream_map_post"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "梦驿柜台下压着一本旧账，记的是过路车队欠下的梦。", uneasy: "账上有一页写着你们的名字，欠数还是空的。", mad: "旧账自己翻页，每翻一页，队伍里就少一个影子。" },
      choices: [
        { label: "查自己的账", hint: "神志 -4，得裂隙名", effect: { axle: 0, grain: 0, sanity: -4, flag: "rift_name" }, result: "你们查到自己的欠数：一页未写完的路。账房把这一页撕下来，交给你们。" },
        { label: "替车队清账", hint: "粮草 -4，神志 +4", effect: { axle: 0, grain: -4, sanity: 4 }, result: "你们用粮清了几笔旧账。梦驿的灯亮了一夜，第二天账本薄了一半。" }
      ]
    },
    rnd_road_boneshell: {
      generatedArt: false, title: "故道骨贝", tag: "路遇", pool: ["trade","sanity"], risk: "low",
      routeTags: ["old_king_road"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "故王道车辙里翻出一枚骨贝，贝面刻着旧朝的市价。", uneasy: "骨贝是温的，像刚从谁手里递过来。", mad: "车辙里全是骨贝，每一枚都刻着你们今天的粮价。" },
      choices: [
        { label: "收骨贝换粮", hint: "粮草 +5，神志 -3", effect: { axle: 0, grain: 5, sanity: -3 }, result: "你们把骨贝收进粮袋。到下一个市口，它换来几袋干粮，也换来一路沉默。" },
        { label: "埋回车辙", hint: "车轴 +3，神志 +3", effect: { axle: 3, grain: 0, sanity: 3 }, result: "你们把骨贝埋回车辙，压了几块碎石。车轮再起步时，声响轻了。" }
      ]
    },
    rnd_pass_lantern: {
      generatedArt: false, title: "废关残灯", tag: "路遇", pool: ["clue","rest"], risk: "low",
      routeTags: ["abandoned_pass"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2, rescueCandidate: true,
      texts: { clear: "废关箭楼里还亮着一盏残灯，灯下没有人，只有半张关文。", uneasy: "灯油是新的，关文上的日期却是三十年前。", mad: "残灯在数过关的人，数到你们时，灯芯爆了一下。" },
      choices: [
        { label: "续灯读关文", hint: "神志 -2，巫辞 +6", effect: { axle: 0, grain: 0, sanity: -2, language: { wuxian: 6 } }, result: "你们续上灯油，读完了半张关文。末尾的巫辞补上了两个缺字。" },
        { label: "灭灯歇夜", hint: "粮草 -2，神志 +5", effect: { axle: 0, grain: -2, sanity: 5, badLuck: -2 }, result: "你们吹灭残灯，在箭楼下歇了一夜。关文被风卷走，谁也没有去追。" }
      ]
    },
    rnd_post_roster: {
      generatedArt: false, title: "驿卒名册", tag: "路遇", pool: ["clue","sanity"], risk: "low",
      routeTags: ["central_post"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "驿墙夹层里掉出一本驿卒名册，最后一页写着“待补：风宪郎一行”。", uneasy: "名册上每划掉一个名字，驿站就少一盏灯。", mad: "名册自己添名字，添到谁，谁就记不起自己从哪里来。" },
      choices: [
        { label: "查自己的条目", hint: "神志 -3，得裂隙名", effect: { axle: 0, grain: 0, sanity: -3, flag: "rift_name" }, result: "你们查到自己的条目，备注只有四个字：“路未写完”。" },
        { label: "烧掉名册", hint: "粮草 -2，神志 +4", effect: { axle: 0, grain: -2, sanity: 4 }, result: "你们把名册投入驿灶。火灭后，驿站重新亮起几盏灯。" }
      ]
    },
    rnd_bird_dust: {
      generatedArt: false, title: "鸟鼠尘", tag: "路遇", pool: ["supply","risk"], risk: "low",
      routeTags: ["bird_mouse_pass"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2, rescueCandidate: true,
      texts: { clear: "山腹里扬起一阵细尘，尘里有鸟羽与鼠毛，落地就变成薄薄一层粮壳。", uneasy: "尘落在舌头上是甜的，落在眼睛里却看见旧路。", mad: "尘里有人在磨牙，磨的是你们剩下的日子。" },
      choices: [
        { label: "收尘筛粮", hint: "粮草 +6，神志 -2", effect: { axle: 0, grain: 6, sanity: -2 }, result: "你们用布兜住细尘，筛出半袋粮壳。尘落尽时，山腹安静下来。" },
        { label: "闭气穿尘", hint: "车轴 +3，神志 +2", effect: { axle: 3, grain: 0, sanity: 2 }, result: "你们闭气赶过尘带，车轮没有陷进浮土。咳出的痰里带着一点羽绒。" }
      ]
    },
    rnd_qingqiu_credit: {
      generatedArt: false, title: "青丘赊账", tag: "路遇", pool: ["trade","sanity"], risk: "low",
      routeTags: ["qingqiu_outer_city"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "青丘铺子肯赊粮，只记名字，不记日子。", uneasy: "账本上已经写满你们的名字，笔迹各不相同。", mad: "掌柜问：这一趟，你们打算用谁的名字来还？" },
      choices: [
        { label: "赊一袋粮", hint: "粮草 +7，神志 -3", effect: { axle: 0, grain: 7, sanity: -3 }, result: "你们赊下一袋粮。掌柜把名字记在账本最后一行，没有写归还日。" },
        { label: "替旧账清名", hint: "粮草 -4，神志 +4", effect: { axle: 0, grain: -4, sanity: 4 }, result: "你们替几笔旧账清了名。账本薄了一页，铺子里的狐灯亮了一层。" }
      ]
    },
    rnd_red_ferry: {
      generatedArt: false, title: "赤水渡钱", tag: "路遇", pool: ["risk","supply"], risk: "medium",
      routeTags: ["red_marsh"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "赤水渡口横着一条铁索，摆渡人收粮，也收一句真话。", uneasy: "摆渡人只要真话，可你们已经记不清哪一句是真的。", mad: "铁索自己收紧，摆渡人问：你们要付粮，还是付名字？" },
      choices: [
        { label: "付粮过渡", hint: "粮草 -5，车轴 +6", effect: { axle: 6, grain: -5, sanity: 0 }, result: "你们付了粮，铁索松开，车队稳稳滑过赤水。摆渡人没有再看你们。" },
        { label: "说一句真话", hint: "神志 -4，粮草 +4", effect: { axle: 0, grain: 4, sanity: -4 }, result: "你们说了一句真话，摆渡人让开渡口，还塞来几块干粮。真话被水声盖住。" }
      ]
    },
    rnd_mire_reed: {
      generatedArt: false, title: "白羽苇声", tag: "路遇", pool: ["clue","sanity"], risk: "low",
      routeTags: ["white_feather_mire"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2, rescueCandidate: true,
      texts: { clear: "白羽淖的苇丛会学人说话，学得最像的是已经离开的人。", uneasy: "苇丛用你们的声音互相问答，答的话你们还没说。", mad: "苇声里有一支车队在走，走到你们身边就停下。" },
      choices: [
        { label: "听苇辨路", hint: "神志 -3，得文鳐水痕", effect: { axle: 0, grain: 0, sanity: -3, flag: "wenao_trace" }, result: "你们听苇声辨出一段沉在水下的旧路。苇丛安静下来，像让开了道。" },
        { label: "割苇扎筏", hint: "车轴 +4，粮草 -2", effect: { axle: 4, grain: -2, sanity: 0 }, result: "你们割苇扎筏，把车轮架上渡水。苇声在背后跟了一段，才散。" }
      ]
    },
    rnd_stele_rubbing: {
      generatedArt: false, title: "断碑拓片", tag: "路遇", pool: ["clue","trade"], risk: "low",
      routeTags: ["broken_stele"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "断碑侧面有一层旧纸痕，像是有人拓过又刮掉。", uneasy: "纸痕里留着你们车轮的纹路，可你们才第一次到。", mad: "你们每拓一次，碑上的名字就少一个，纸上多一个。" },
      choices: [
        { label: "重拓碑文", hint: "神志 -4，巫辞 +8", effect: { axle: 0, grain: 0, sanity: -4, language: { wuxian: 8 } }, result: "你们重拓碑文，纸下浮出几行被刮掉的巫辞。拓完时，碑身轻了一分。" },
        { label: "覆纸盖碑", hint: "粮草 -2，神志 +5", effect: { axle: 0, grain: -2, sanity: 5 }, result: "你们用旧纸覆住碑面，不再看那些名字。过碑时，谁也没有回头。" }
      ]
    },
    rnd_dream_bell: {
      generatedArt: false, title: "梦驿夜钟", tag: "路遇", pool: ["rest","sanity"], risk: "low",
      routeTags: ["dream_map_post"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2, rescueCandidate: true,
      texts: { clear: "梦驿没有钟楼，半夜却有钟声，一声比一声近。", uneasy: "钟声停时，驿外站着一排等门的人，都没有影子。", mad: "钟声在你们胸腔里敲，每一下都少一个人。" },
      choices: [
        { label: "循钟开驿门", hint: "神志 -4，得裂隙名", effect: { axle: 0, grain: 0, sanity: -4, flag: "rift_name" }, result: "你们开驿门，门外没有人，只有一块写着你们来路的木牌。" },
        { label: "塞耳守夜", hint: "粮草 -2，神志 +5", effect: { axle: 0, grain: -2, sanity: 5, badLuck: -2 }, result: "你们塞住耳朵守到天亮。钟声停了，驿外的人也不见了。" }
      ]
    },
    rnd_black_ledger: {
      generatedArt: false, title: "黑齿齿账", tag: "路遇", pool: ["trade","clue"], risk: "low",
      routeTags: ["black_teeth_market"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "黑齿账房用牙齿记账，一颗牙抵一桩旧事。", uneasy: "账房的牙盒里有一格空着，标签写着你们的姓。", mad: "账房问：你们想买回哪一桩，还是想卖掉哪一桩？" },
      choices: [
        { label: "买回一桩旧事", hint: "粮草 -4，神志 +4", effect: { axle: 0, grain: -4, sanity: 4, flag: "old_account" }, result: "你们用粮买回一桩旧事。账房取出一颗牙，放回盒里空着的那一格。" },
        { label: "卖一桩旧事", hint: "粮草 +6，神志 -3", effect: { axle: 0, grain: 6, sanity: -3 }, result: "你们卖了一桩不愿再提的旧事。账房把牙收进盒子，粮袋沉了。" }
      ]
    },
    rnd_shrine_ash: {
      generatedArt: false, title: "祠灰问名", tag: "路遇", pool: ["clue","sanity"], risk: "low",
      routeTags: ["nameless_shrine"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "无名祠的香灰积了半尺，灰面平整，像等人写字。", uneasy: "灰上已经写了一个“陆”字，最后一笔还没干。", mad: "灰里伸出许多手指，争着替你们写完剩下的名字。" },
      choices: [
        { label: "以灰问名", hint: "神志 -3，巫辞 +7", effect: { axle: 0, grain: 0, sanity: -3, language: { wuxian: 7 } }, result: "你们在灰上写下问辞，灰面浮出几个旧名。写完时，香灰冷了下去。" },
        { label: "扫灰出门", hint: "粮草 -2，神志 +4", effect: { axle: 0, grain: -2, sanity: 4 }, result: "你们把香灰扫到阶下，没有再看那些字。出门时，祠里起了风。" }
      ]
    },
    rnd_pass_arrow: {
      generatedArt: false, title: "关墙箭孔", tag: "路遇", pool: ["trade","risk"], risk: "low",
      routeTags: ["abandoned_pass"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "废关墙上有几个箭孔，孔里嵌着锈死的箭头。", uneasy: "箭头还在轻轻震，像外面有人正在拉弓。", mad: "每个箭孔都对着车队，孔后有人低声报你们的日数。" },
      choices: [
        { label: "拔箭头换铁", hint: "车轴 +5，神志 -2", effect: { axle: 5, grain: 0, sanity: -2 }, result: "你们拔出几枚箭头，锈铁还能打轴箍。墙后安静了一阵。" },
        { label: "堵孔赶路", hint: "粮草 -2，神志 +3", effect: { axle: 0, grain: -2, sanity: 3 }, result: "你们用碎石堵住箭孔，快步过关。走出很远，仍觉得背后有弓弦声。" }
      ]
    },
    rnd_post_well: {
      generatedArt: false, title: "驿井照影", tag: "路遇", pool: ["sanity","clue"], risk: "low",
      routeTags: ["central_post"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2, rescueCandidate: true,
      texts: { clear: "驿井水面平得像铜镜，照出的车队比实际多一辆车。", uneasy: "井里那辆车的车帘掀开，坐的是你们其中一人的旧模样。", mad: "井水问：要不要把多出来的那辆车也带上？" },
      choices: [
        { label: "照井问旧路", hint: "神志 -3，得裂隙名", effect: { axle: 0, grain: 0, sanity: -3, flag: "rift_name" }, result: "你们照井问路，水面浮出一段没走过的官道。多出的那辆车不见了。" },
        { label: "填井赶路", hint: "粮草 -2，神志 +4", effect: { axle: 0, grain: -2, sanity: 4 }, result: "你们用碎石填井，水面碎成几片。再上路时，车队数目对上了。" }
      ]
    },
    rnd_marsh_mud: {
      generatedArt: false, title: "雷泽泥陷", tag: "路遇", pool: ["risk","supply"], risk: "medium",
      routeTags: ["thunder_marsh"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2, rescueCandidate: true,
      texts: { clear: "雷泽边缘的泥面看不出深浅，前车的辙到一半就断了。", uneasy: "泥下传来车轴转动的空响，像有车队还在走。", mad: "泥面开始模仿你们的脚步，踩一步，陷一步。" },
      choices: [
        { label: "铺苇过泥", hint: "粮草 -3，车轴 +5", effect: { axle: 5, grain: -3, sanity: 0 }, result: "你们割苇铺路，把车轮一点点推过泥带。苇下有空响，谁也没有低头看。" },
        { label: "卸粮减重", hint: "粮草 -5，神志 +3", effect: { axle: 0, grain: -5, sanity: 3 }, result: "你们卸下一部分粮，轻车过泥。回程时，那些粮已经沉进泽里。" }
      ]
    },
    rnd_feather_tide: {
      generatedArt: false, title: "羽民潮约", tag: "路遇", pool: ["trade","sanity"], risk: "low",
      routeTags: ["feather_folk_ford"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2,
      texts: { clear: "羽民在渡口立潮约：退潮前过河者留粮，涨潮后过河者留名。", uneasy: "潮约上的名字被水泡开，仍能认出你们其中一人。", mad: "潮水开始背约，往岸上涨，羽民却都低头补网。" },
      choices: [
        { label: "留粮守约", hint: "粮草 -4，神志 +4", effect: { axle: 0, grain: -4, sanity: 4, badLuck: -2 }, result: "你们留下粮，赶在退潮前过河。羽民收粮时，把你们的名字从潮约上划掉了。" },
        { label: "留名过河", hint: "粮草 +5，神志 -4", effect: { axle: 0, grain: 5, sanity: -4, flag: "feather_debt" }, result: "你们留下名字，换羽民指了一条暗水道。过河后，名字还留在潮约上。" }
      ]
    },
    rnd_dream_key: {
      generatedArt: false, title: "梦驿铜钥", tag: "路遇", pool: ["clue","supply"], risk: "low",
      routeTags: ["dream_map_post"], trigger: { phase: "mid_route" }, weight: 8, cooldown: 2, rescueCandidate: true,
      texts: { clear: "梦驿柜台上放着一枚铜钥，钥匙孔却在柜台里面。", uneasy: "铜钥是热的，像刚有人从梦里拔出来。", mad: "柜台里有人在用你们的钥匙开外面的门。" },
      choices: [
        { label: "开柜台暗匣", hint: "粮草 +6，神志 -3", effect: { axle: 0, grain: 6, sanity: -3 }, result: "你们用铜钥打开暗匣，里面是几袋旧粮和一张没写完的路引。" },
        { label: "把钥还回梦驿", hint: "神志 +5，车轴 -2", effect: { axle: -2, grain: 0, sanity: 5 }, result: "你们把铜钥放回柜台，钥匙孔自行合上。驿里的灯亮了一夜。" }
      ]
    }
  },
  events: {
    post_gate: {
      title: "驿门未闭",
      tag: "出发",
      texts: {
        clear: "驿卒把最后一束干草塞上车，说西边路还在，只是没人按时回来。",
        uneasy: "驿门在风里开合，像有人替你们数车轮。西边路还在，路上的人不一定还在。",
        mad: "门没有关。门在等。车轴才转半圈，驿卒已经把你们的归期写成旧账。"
      },
      choices: [
        {
          label: "整点车具",
          hint: "车轴 +8，粮草 -3",
          effect: { axle: 8, grain: -3, sanity: 0 },
          result: "你们用一袋豆粟换了几枚旧铜钉，车轮声稳了一些。"
        },
        {
          label: "立刻上路",
          hint: "粮草 -2",
          effect: { axle: 0, grain: -2, sanity: 0 },
          result: "队伍未再回头。驿门声很快被风盖住。"
        }
      ]
    },
    split_tracks: {
      title: "车辙分叉",
      tag: "路线教学",
      texts: {
        clear: "旧王道上有两道车辙，一道新而浅，一道旧而深。随从说新辙绕远，旧辙伤车。",
        uneasy: "两道车辙互相盖住，像同一辆车走了两次。随从不肯先说自己看见哪一道。",
        mad: "车辙在你脚下分开，又在你眼里合上。旧的是新的，新的还没发生。"
      },
      choices: [
        {
          label: "验土再走",
          hint: "神志 +4，粮草 -4",
          effect: { axle: 0, grain: -4, sanity: 4 },
          result: "你们停下辨土，车轮在原地反复试压，才知道哪道车辙是真的。"
        },
        {
          label: "沿深辙硬过",
          hint: "车轴 -5",
          effect: { axle: -5, grain: 0, sanity: 0 },
          result: "车轮咬进旧痕，旧路把车往前拽，也响得很难听。"
        }
      ]
    },
    closed_order: {
      title: "废关旧令",
      tag: "边境",
      texts: {
        clear: "废关门额残存旧令：不得西行。字迹陈旧，但像昨日才擦过灰。",
        uneasy: "旧令写着不得西行，西字却被反复描深。墙后有风，风里像有人念你的姓名。",
        mad: "不得西行。不得归。不得看见第二座门。旧令写完，墙自己又补了一笔。"
      },
      choices: [
        {
          label: "拓下旧令",
          hint: "神志 -5，获得巫文线索",
          effect: { axle: 0, grain: 0, sanity: -5, flag: "old_order" },
          result: "墨拓未干，字却像从纸背往外生。"
        },
        {
          label: "拆门木修车",
          hint: "车轴 +12，神志 -3",
          effect: { axle: 12, grain: 0, sanity: -3 },
          result: "门木很硬，也很冷。车轴修好了，旧令少了一角。"
        }
      ]
    },
    ground_thunder: {
      title: "泽鼓回雷",
      tag: "泽地",
      texts: {
        clear: "浅泥像鼓面，车轮每压一寸，远雷便从泥下回一声。",
        uneasy: "雷没有从天上来。泥水替车队数步，数到空拍时，浅路才肯露出来。",
        mad: "天在脚下。雷在脚下。车轮压着一面大鼓，鼓里有人替你们点名。"
      },
      choices: [
        {
          label: "铺芦过鼓面",
          hint: "车轴 -2，粮草 -4，神志 +2",
          effect: { axle: -2, grain: -4, sanity: 2 },
          result: "芦束一层层压住鼓面，雷声低下去，车轮慢慢挪过浅泥。"
        },
        {
          label: "听雷辨浅路",
          hint: "神志 -7，获得 heard_ground_thunder",
          effect: { axle: 0, grain: 0, sanity: -7, flag: "heard_ground_thunder" },
          result: "你听出雷声的空拍。那不是沉默，是一条水下浅路正在换气。"
        },
        {
          label: "采雷熟芦根",
          hint: "粮草 +9，神志 -3",
          effect: { axle: 0, grain: 9, sanity: -3 },
          result: "芦根被泥雷烤得半熟，能吃；咬开时，齿间响起一声很远的闷雷。"
        }
      ]
    },
    black_trade: {
      title: "黑齿交易",
      tag: "异族",
      texts: {
        clear: "日中棚影下多出一张小摊，摊主不开口，只让影子替他称粮。价码落在地上，比货物先动。",
        uneasy: "摊主没有影。影子在卖摊主，也在卖你们明日的脚步。",
        mad: "不是市。是口。摊位一张一合。影子在卖你们，黑齿只是站着，等地上的价把人咬住。"
      },
      choices: [
        {
          label: "以旧铁换粮",
          hint: "粮草 +15，车轴 -4",
          effect: { axle: -4, grain: 15, sanity: 0 },
          result: "市人收下旧铁，给的粮草没有霉味，只是颗粒都朝同一方向。"
        },
        {
          label: "换取白羽",
          hint: "粮草 -8，神志 -3，羽民语 +20",
          effect: { axle: 0, grain: -8, sanity: -3, language: { feather: 20 } },
          result: "白羽很轻，落在手上却像有人把一条路交给你。"
        },
        {
          label: "踩散价码",
          hint: "粮草 -2，神志 +4",
          effect: { axle: 0, grain: -2, sanity: 4, flag: "black_price" },
          result: "你把地上的影价踩散。摊主没有追，只把笑声收回牙后。"
        }
      ]
    },
    qingqiu_lamps: {
      title: "狐灯绕名",
      tag: "边邑",
      texts: {
        clear: "城门下挂着狐灯，市吏递来空册。册页不问来处，只问真名、假名，或不留名。",
        uneasy: "灯先替你写了一笔。册页翻到最后，空格里已经有一个会回头的名字。",
        mad: "灯不是挂在墙上，是挂在你们眼里。空册自己翻页，每眨一次，城里就少一个人。"
      },
      choices: [
        {
          label: "换狐灯静夜",
          hint: "神志 +7，粮草 -4",
          effect: { axle: 0, grain: -4, sanity: 7 },
          result: "狐灯挂上车头，夜路里的影子退远了一些。"
        },
        {
          label: "留假名入册",
          hint: "神志 -3，获得 false_name_pass",
          effect: { axle: 0, grain: 0, sanity: -3, flag: "false_name_pass" },
          result: "边邑路引写下了一个不是你的名字，纸面却很快干了。"
        },
        {
          label: "以粮换无名路引",
          hint: "粮草 -5，神志 +4",
          effect: { axle: 0, grain: -5, sanity: 4, flag: "false_name_pass" },
          result: "市吏收粮，不再问名。空册合上时，狐灯替队伍照出一段无名小路。"
        }
      ]
    },
    hollow_pass: {
      title: "同穴分粮",
      tag: "山隘",
      texts: {
        clear: "洞口落着碎粟和白羽，山腹里传来细碎搬粮声。",
        uneasy: "白羽没有风也在动。山腹一阵近一阵远，像有什么正替你们分粮。",
        mad: "洞里不是鸟鼠，是许多小路在磨牙。粮袋一响，山腹就多咬下一口。"
      },
      choices: [
        {
          label: "留粮换暗路",
          hint: "粮草 -5，神志 +3，获得 hollow_pass_hint",
          effect: { axle: 0, grain: -5, sanity: 3, flag: "hollow_pass_hint" },
          result: "碎粟被拖进小洞。片刻后，洞声向两侧退开，夹道露出一段能过车的暗路。"
        },
        {
          label: "拾洞口碎粟",
          hint: "粮草 +5，神志 -4",
          effect: { axle: 0, grain: 5, sanity: -4 },
          result: "碎粟补进粮袋，袋底却轻轻响了一夜，像山腹还在往外吐粮。"
        },
        {
          label: "堵洞硬过",
          hint: "车轴 +3，神志 -5",
          effect: { axle: 3, grain: 0, sanity: -5 },
          result: "石块堵住洞口，轮轴少受山壁剐蹭；夜里，那些细声全转到车底。"
        }
      ]
    },
    nameless_prayer: {
      title: "无匾新灰",
      tag: "祭所",
      texts: {
        clear: "香灰被风吹开，祠后露出一截新踩出的短路。供桌空着，像等一口粮，也等一个称呼。",
        uneasy: "不是灰开了路，是路从灰里醒了。空供位转向你们，像认得队伍里少的那个人。",
        mad: "祠在路旁，也在路中。路从灰里醒来，你们每走一步，它就近一点。"
      },
      choices: [
        {
          label: "献粟问路",
          hint: "粮草 -4，神志 +5",
          effect: { axle: 0, grain: -4, sanity: 5 },
          result: "粟粒落进香灰，灰面显出半截可走的弯路。"
        },
        {
          label: "记下供位空名",
          hint: "神志 -2，获得 nameless_seat",
          effect: { axle: 0, grain: 0, sanity: -2, flag: "nameless_seat" },
          result: "空位没有名字，却在你记下时轻轻让开了一点路。"
        },
        {
          label: "不拜直过",
          hint: "车轴 -3，神志 +2",
          effect: { axle: -3, grain: 0, sanity: 2 },
          result: "车队没有停拜，轮子压过祠后硬坎。灰没有追来，只在风里合上。"
        }
      ]
    },
    sunken_feather: {
      title: "白羽沉水",
      tag: "异象",
      texts: {
        clear: "羽毛沉在水底，重石却浮在泥上。",
        uneasy: "水面像反着照人，轻的下沉，重的迟迟不落。",
        mad: "羽毛沉着，水却浮着。渡口藏在上下颠倒处。"
      },
      choices: [
        {
          label: "留重物试渡",
          hint: "车轴 -3，获得 feather_ford_hint",
          effect: { axle: -3, grain: 0, sanity: 0, flag: "feather_ford_hint" },
          result: "旧铁沉入水面之上，渡口方向短暂显出。"
        },
        {
          label: "捞羽问路",
          hint: "神志 -5，羽民语 +10",
          effect: { axle: 0, grain: 0, sanity: -5, language: { feather: 10 } },
          result: "白羽贴在掌心，像一枚未说出口的词。"
        },
        {
          label: "用半通的白羽语问路",
          hint: "羽民语 ≥10：粮草 +2，羽民语 +4",
          conditions: [{ languageMin: { key: "feather", value: 10 } }],
          effect: { axle: 0, grain: 2, sanity: 0, language: { feather: 4 } },
          result: "你把听来的几个白羽词拼在一起。洗衣的羽民抬头看了你一眼，往浅滩指了指。"
        },
        {
          label: "绕水而行",
          hint: "粮草 -4，神志 +2",
          effect: { axle: 0, grain: -4, sanity: 2 },
          result: "你们不再看水，队伍终于走出倒影。"
        }
      ]
    },
    feather_ford_debt: {
      title: "羽民记名",
      tag: "渡口",
      texts: {
        clear: "渡口没有桥，羽民说轻物可以先过，重物要留下一个名字。",
        uneasy: "白羽压在水面上，像一张张没写完的账。",
        mad: "羽不是桥，是许多未说出口的名字。踏上一枚，就少记得一件事。"
      },
      choices: [
        {
          label: "以粮换羽舟",
          hint: "车轴 +4，粮草 -7",
          effect: { axle: 4, grain: -7, sanity: 0 },
          result: "羽舟轻得像影子，带车队过了最伤车的一段浅水。"
        },
        {
          label: "留下旧名过渡",
          hint: "神志 -5，获得 feather_debt（梦图驿会追索）",
          effect: { axle: 0, grain: 0, sanity: -5, flag: "feather_debt" },
          result: "旧名被记入羽民账，渡水时车轮几乎没有陷下去；这笔名债会跟到梦图驿。"
        },
        {
          label: "凭旧价读契约议渡",
          hint: "羽民语 ≥20 或已得黑齿影价：车轴 +4，粮草 -2，留下渡契",
          requireAny: [
            { languageMin: { key: "feather", value: 20 } },
            { flag: "black_price" }
          ],
          effect: { axle: 4, grain: -2, sanity: 0, flag: "feather_treaty" },
          effectVariants: [
            {
              conditions: [
                { languageMin: { key: "feather", value: 20 } },
                { flag: "black_price" }
              ],
              effect: { axle: 4, grain: -2, sanity: 0, flag: "feather_treaty" },
              hint: "羽民语≥20 + 黑齿影价：车轴 +4，粮草 -2",
              historySource: {
                kind: "language-and-flag",
                source: "黑齿市 · 换取白羽 + 踩散价码"
              },
              result: "你用黑齿市换来的白羽语读出影价，羽民认出是同一笔账，按原价让车先过；渡契会留在梦图驿的案上。"
            },
            {
              conditions: [{ languageMin: { key: "feather", value: 20 } }],
              effect: { axle: 4, grain: -2, sanity: 0, flag: "feather_treaty" },
              hint: "羽民语≥20（来自黑齿市白羽）：车轴 +4，粮草 -2",
              historySource: {
                kind: "language",
                source: "黑齿市 · 换取白羽"
              },
              result: "你用黑齿市换来的白羽语读出渡契，羽民按原价让车先过；这份契约会留在梦图驿的案上。"
            },
            {
              conditions: [{ flag: "black_price" }],
              effect: { axle: 4, grain: -3, sanity: 0, flag: "black_price_settled" },
              hint: "已得黑齿影价：车轴 +4，粮草 -3",
              historySource: {
                kind: "flag",
                source: "黑齿市 · 踩散价码"
              },
              result: "你把黑齿市踩散的影价重新报给羽民，双方认出是同一笔账；车轴得到一枚渡契回执。"
            }
          ],
          historySource: {
            kind: "language-or-flag",
            language: { key: "feather", value: 20, source: "黑齿市 · 换取白羽" },
            flag: { key: "black_price", source: "黑齿市 · 踩散价码" }
          },
          result: "你把黑齿市留下的白羽语或影价交给羽民，渡契因此落账。"
        },
        {
          label: "把黑齿采风递给羽民",
          hint: "哀录、讽录或谶录已入册：后续回应各不相同",
          requireAny: [
            { flag: "black_teeth_lament_record" },
            { flag: "black_teeth_satire_record" },
            { flag: "black_teeth_omen_record" }
          ],
          effect: { axle: 0, grain: 0, sanity: 0, flag: "black_report_acknowledged" },
          effectVariants: [
            {
              conditions: [{ flag: "black_teeth_lament_record" }],
              effect: { axle: 0, grain: 8, sanity: 0, flag: "lament_aid" },
              hint: "黑齿市哀录：粮草 +8，取得援粮与证词",
              historySource: {
                kind: "field-note",
                locationId: "black_teeth_market",
                style: "lament",
                source: "黑齿市 · 哀录灾情"
              },
              result: "羽民看过你在黑齿市哀录的饥苦，递来一袋援粮和一段证词；哀录终于有了活人的回声。"
            },
            {
              conditions: [{ flag: "black_teeth_satire_record" }],
              effect: { axle: 0, grain: -3, sanity: 3, flag: "satire_audit" },
              hint: "黑齿市讽录：粮草 -3，神志 +3，留下查验凭据",
              historySource: {
                kind: "field-note",
                locationId: "black_teeth_market",
                style: "satire",
                source: "黑齿市 · 讽记民声"
              },
              result: "因你在黑齿市讽记民声，羽民先查验车上的货契，留下查验凭据；讽意换来的是可追问的证词。"
            },
            {
              conditions: [{ flag: "black_teeth_omen_record" }],
              effect: { axle: 0, grain: 0, sanity: 5, flag: "omen_warning" },
              hint: "黑齿市谶录：神志 +5，取得避名警兆",
              historySource: {
                kind: "field-note",
                locationId: "black_teeth_market",
                style: "omen",
                source: "黑齿市 · 谶写异兆"
              },
              result: "羽民认出你在黑齿市谶写的无声影价，替车队遮住名字再放行；谶言成了可用的避名警兆。"
            }
          ],
          historySource: {
            kind: "field-note",
            locationId: "black_teeth_market",
            styles: ["lament", "satire", "omen"],
            source: "黑齿市 · 采风写法"
          },
          result: "羽民翻看黑齿市采风，按你留下的说法回应。"
        }
      ]
    },
    dream_map_gate: {
      title: "梦图小门",
      tag: "前哨",
      texts: {
        clear: "夜里地图自己卷起，卷口像一扇小门。醒来后门还在纸上。",
        uneasy: "没人能证明昨夜开过门，但每个人都记得门后的风。",
        mad: "地图睡着了。你们醒在它的梦里，驿门开在纸背。"
      },
      choices: [
        {
          label: "整束梦图",
          hint: "神志 +7，粮草 -4",
          effect: { axle: 0, grain: -4, sanity: 7 },
          result: "残图被绳重新束住，队伍短暂确认了裂隙前的方位。"
        },
        {
          label: "按羽民旧名兑债",
          hint: "羽民渡旧名债已追到：粮草 -4，神志 +2，获得还债回声",
          conditions: [{ flag: "feather_debt" }],
          effect: { axle: 0, grain: -4, sanity: 2, flag: "feather_debt_repaid" },
          historySource: {
            kind: "flag",
            flag: "feather_debt",
            source: "羽民渡 · 留下旧名过渡"
          },
          result: "羽民渡留下的旧名债追到梦图驿，你交还粮草，换回一段不会改写姓名的梦图证词。"
        },
        {
          label: "以裂隙名校正梦图",
          hint: "巫咸断碑取得的裂隙名：神志 +4，获得定名证词",
          conditions: [{ flag: "rift_name" }],
          effect: { axle: 0, grain: 0, sanity: 4, flag: "rift_name_confirmed" },
          historySource: {
            kind: "flag",
            flag: "rift_name",
            source: "巫咸断碑 · 让碑补全你的名字"
          },
          result: "你在巫咸断碑取得的裂隙名被梦图驿认出，卷口因此定住；这一次，裂隙名真正校正了可走的方向。"
        },
        {
          label: "按梦门标记前哨",
          hint: "神志 -6，获得 dream_gate_mark",
          effect: { axle: 0, grain: 0, sanity: -6, flag: "dream_gate_mark" },
          result: "地图多出一枚裂隙前记号，像昨夜的门终于承认自己开过。"
        }
      ]
    },
    red_bones: {
      title: "赤水岸骨",
      tag: "禁忌",
      texts: {
        clear: "赤水无波，岸边旧骨排列如路标。随从建议日落前离开。",
        uneasy: "旧骨像被人重新摆过，草尖一齐朝向队伍。水声从车底传来。",
        mad: "水没有来。骨先来了。草在数人，数到你时停住。有人说夜里才浅。"
      },
      choices: [
        {
          label: "掩骨祭拜",
          hint: "粮草 -6，神志 +6",
          effect: { axle: 0, grain: -6, sanity: 6 },
          result: "你们掩埋了最靠近水的一排骨。夜色慢了半拍。"
        },
        {
          label: "沿骨行路",
          hint: "车轴 -4，神志 -10，解锁裂隙方向",
          effect: { axle: -4, grain: 0, sanity: -10, flag: "followed_bones" },
          result: "骨路确实通向前方，只是每一截都像刚从水里捞出来。"
        },
        {
          label: "凝视赤水辨路",
          hint: "禁忌试演 / 神志 -28，解锁裂隙方向",
          conditions: [{ sanityMax: 70 }],
          effect: { axle: 0, grain: 0, sanity: -28, flag: "followed_bones" },
          result: "你盯住水底那条并不存在的路，直到所有字都从眼前散开。"
        },
        {
          label: "夜里下水",
          hint: "神志低时可见 / 车轴 -2，神志 -12，直接认出幻路",
          conditions: [{ sanityMax: 34 }],
          effect: { axle: -2, grain: 0, sanity: -12, flag: "followed_bones" },
          result: "水并不深，至少在你眼中不深。随从说你走在岸上，你却听见车轮在水下。"
        }
      ]
    },
    read_name: {
      title: "断碑读名",
      tag: "巫文",
      texts: {
        clear: "断碑半埋，碑面只有残笔。你能辨出方位，却无法辨出它祭给谁。",
        uneasy: "碑上的空缺总在等你补全。你越看，越觉得缺的那一笔是自己的姓。",
        mad: "碑不是缺字。碑在等你把名字还给它。你读一笔，少一日。"
      },
      choices: [
        {
          label: "拓碑带走",
          hint: "神志 -7，巫咸古辞 +20",
          effect: { axle: 0, grain: 0, sanity: -7, language: { wuxian: 20 } },
          result: "拓片卷起时，碑上的一处残画像车队，又像裂口。"
        },
        {
          label: "毁去碑面",
          hint: "车轴 -3，神志 +5",
          effect: { axle: -3, grain: 0, sanity: 5 },
          result: "石屑落地，队伍安静了些。可有随从说他还记得碑上的字。"
        },
        {
          label: "让碑补全你的名字",
          hint: "低神志选项 / 神志 -12，解锁裂隙名",
          conditions: [{ sanityMax: 34 }],
          effect: { axle: 0, grain: 0, sanity: -12, flag: "rift_name" },
          result: "碑文终于完整。完整的不是字，是一条通往地图裂口的称呼。"
        }
      ]
    },
    rift_dream: {
      title: "裂隙前梦",
      tag: "边界",
      texts: {
        clear: "前方地平线像被刀背压低。夜里众人梦见同一张地图，地图边缘没有画完。",
        uneasy: "地图在梦中自己折起，折痕正压在你们所在的位置。醒来后，车辙也按折痕转弯。",
        mad: "地图睡着了。你们醒在它的梦里。前方不是下一站，是纸破的声音。"
      },
      choices: [
        {
          label: "按梦中地图前进",
          hint: "神志 -12，进入裂隙结局",
          effect: { axle: 0, grain: 0, sanity: -12, ending: "rift" },
          result: "队伍驶向地图没有画完的地方。"
        },
        {
          label: "烧掉梦图，原路归返",
          hint: "粮草 -4，进入归返结局",
          effect: { axle: 0, grain: -4, sanity: 3, ending: "return" },
          result: "灰烬飞起时，你们终于看见来路仍在人间。"
        },
        {
          label: "焚志远走",
          hint: "采风 ≥4 条：烧掉总志，脱离王命",
          requireAny: [{ flag: "field_notes_ready" }],
          effect: { axle: 0, grain: -4, sanity: 2, ending: "burn" },
          result: "你们把总志投入火里。纸灰飞向裂隙，人却转向没有王命的方向。"
        }
      ]
    },
    shaxu_well: {
      generatedArt: false,
      title: "古河道",
      tag: "沙墟",
      texts: {
        clear: "胡杨根下的湿沙越挖越深，沙底传来水声。沙丘另一侧，一支驼队正等水。",
        uneasy: "水声从三个方向同时传来。驼队领队说，只有一处是真的，挖错会把车埋进去。",
        mad: "沙下有一条河在倒流。你们每挖一锹，河就退一里。"
      },
      choices: [
        { label: "挖开古河道", hint: "粮草 +9，神志 -3", effect: { axle: 0, grain: 9, sanity: -3 }, result: "你们挖到湿沙层，滤出半囊浑水。驼队分走一半，车队灌满水囊。" },
        { label: "分水给驼队", hint: "粮草 -3，神志 +5", effect: { axle: 0, grain: -3, sanity: 5, flag: "old_account" }, result: "你们把水囊分给快渴死的行商。领队把沙墟旧路画在车板上，说风宪郎来过。" },
        { label: "绕开沙丘", hint: "车轴 -2，神志 +2", effect: { axle: -2, grain: 0, sanity: 2 }, result: "车队绕开流沙，多走了半日。水声在身后渐渐沉下去。" }
      ]
    },
    xuansu_ice: {
      generatedArt: false,
      title: "鱼骨契",
      tag: "玄素山",
      texts: {
        clear: "冰道入口立着鱼骨契，玄冰氏说借路可以，须留一件铁器或闭目守礼。",
        uneasy: "鱼骨契上的刻痕与车轴裂纹一样。雪鹫在头顶盘旋，像在等答复。",
        mad: "冰道通向天池，天池里有一支和你们一模一样的车队。"
      },
      choices: [
        { label: "留铁借冰道", hint: "车轴 +5，粮草 -2", effect: { axle: 5, grain: -2, sanity: 0 }, result: "你们留下旧轴箍。雪鹫衔起铁器，引车队从冰面上直穿过去。" },
        { label: "闭目守凿冰礼", hint: "神志 +5，车轴 -2", effect: { axle: -2, grain: 0, sanity: 5, badLuck: -2 }, result: "你们在池边闭目一炷香。礼毕睁眼，冰窟里多出一条可走的冰道。" },
        { label: "绕下雪线", hint: "粮草 -3，神志 +2", effect: { axle: 0, grain: -3, sanity: 2 }, result: "车队绕下雪线，多走了半日。雪鹫跟了一段，才转向北去。" }
      ]
    }
  },
  crisisEvents: {
    axle: {
      title: "断轴边缘",
      tag: "濒死补救",
      texts: {
        clear: "车轴终于撑不住了。随从把绳、钉、门木和旧辐条堆在一起，等你决定还要不要继续走。",
        uneasy: "车轮歪着转了一圈，像在原地画符。你们还有一点办法，只是不再体面。",
        mad: "车没有坏。路坏了。轴心里有人敲门，说把重物留下，路就肯放你们过去。"
      },
      choices: [
        {
          label: "拆旧车具补轴",
          hint: "车轴 +22，粮草 -6，坏运 +4",
          effect: { axle: 22, grain: -6, sanity: 0, badLuck: 4 },
          result: "旧车具被拆成一把把临时楔子，车轮重新咬住路面。"
        },
        {
          label: "弃重慢行",
          hint: "车轴 +12，神志 -5，坏运 -3",
          effect: { axle: 12, grain: 0, sanity: -5, badLuck: -3, flag: "abandoned_load" },
          result: "你们把最沉的箱子留在路边，队伍轻了，心也空了一块。"
        }
      ]
    },
    grain: {
      title: "粮袋见底",
      tag: "濒死补救",
      texts: {
        clear: "最后一袋粟被倒在布上，少得不像一支队伍的明日。",
        uneasy: "粮袋轻得像装着风。有人说昨夜听见袋底有牙齿磨动。",
        mad: "粮草没有尽。尽的是数粮的人。你数到最后一粒，它抬头看了你一眼。"
      },
      choices: [
        {
          label: "宰牲分粮",
          hint: "粮草 +24，车轴 -4，坏运 +3",
          effect: { axle: -4, grain: 24, sanity: 0, badLuck: 3 },
          result: "役畜少了一匹，粮锅里终于有了热气。"
        },
        {
          label: "向梦里求粮",
          hint: "粮草 +14，神志 -9，坏运 -2",
          effect: { axle: 0, grain: 14, sanity: -9, badLuck: -2, flag: "dream_grain" },
          result: "醒来时袋中多出半袋黑粟，没人敢问它从哪里来。"
        }
      ]
    },
    sanity: {
      title: "神志崩线",
      tag: "濒死补救",
      texts: {
        clear: "记路人忽然忘了自己手里的笔。队伍仍在前进，但每个人说的方向都不同。",
        uneasy: "你们开始把影子当成路标。幸好还有人记得中原话该怎么写。",
        mad: "字散了。路散了。只有车轮声还在替你们证明队伍没有完全碎开。"
      },
      choices: [
        {
          label: "让巫祝代记",
          hint: "神志 +22，粮草 -5，坏运 +4",
          effect: { axle: 0, grain: -5, sanity: 22, badLuck: 4 },
          result: "巫祝把众人的名字按次序念了一遍，路终于又有了前后。"
        },
        {
          label: "接受幻路",
          hint: "神志 +10，获得幻路标记，坏运 -4",
          effect: { axle: 0, grain: 0, sanity: 10, badLuck: -4, flag: "accepted_mirage" },
          result: "你不再反驳那些不存在的路。奇怪的是，车队因此没有停下。"
        }
      ]
    }
  },
  endingDefinitions: {
    rift: "入裂隙：队伍抵达地图没有画完的地方。",
    return: "归中原：队伍带着残图折返。",
    burn: "焚志远走：队伍烧掉总志，离开九州正史。",
    lost_mind: "失名：队伍在裂隙里失去了名字与归路。",
    return_true: "归中原·实录：带着民疾与罪证回到人间。",
    return_polished: "归中原·粉饰：带着盛世奇谈回到人间。"
  },
  legacyEndingIds: ["return"],
  poetryContent: {
    sourceName: "诗泉",
    sourceUrl: "https://poetry.palemoky.com/",
    apiBaseUrl: "https://poetry.palemoky.com",
    randomPath: "/api/poems/random",
    lang: "zh-Hans",
    timeoutMs: 5200,
    terrainProfiles: {
      road: { dynasty: "唐", type: "五言律诗" },
      market: { dynasty: "唐", type: "乐府诗" },
      water: { dynasty: "宋", type: "宋词" },
      rift: { dynasty: "先秦", type: "楚辞" }
    },
    locationProfiles: {
      central_post: { dynasty: "唐", type: "五言律诗" },
      qingqiu_outer_city: { dynasty: "宋", type: "宋词" },
      feather_folk_ford: { type: "楚辞" },
      broken_stele: { type: "楚辞" },
      kyushu_rift: { type: "楚辞" }
    },
    sceneVerses: {
      locations: {
        central_post: {
          line: "征蓬出汉塞，归雁入胡天。",
          title: "使至塞上",
          author: "王维",
          fit: "中原驿是人间秩序的最后一站，诗句先把车队推出边塞。"
        },
        old_king_road: {
          line: "古道西风瘦马，夕阳西下，断肠人在天涯。",
          title: "天净沙·秋思",
          author: "马致远",
          fit: "故王道的核心不是风景，而是旧路、远行和离开人间的天涯感。"
        },
        qingqiu_outer_city: {
          line: "月出皎兮，佼人僚兮。",
          title: "诗经·陈风·月出",
          author: "佚名",
          fit: "青丘外城以月色、狐灯和姓名诱惑为主。"
        },
        abandoned_pass: {
          line: "秦时明月汉时关，万里长征人未还。",
          title: "出塞",
          author: "王昌龄",
          fit: "废关旧令与边塞不可归的气息相合。"
        },
        bird_mouse_pass: {
          line: "空山不见人，但闻人语响。",
          title: "鹿柴",
          author: "王维",
          fit: "鸟鼠同穴的山口有声无人，适合幽深窄关。"
        },
        nameless_shrine: {
          line: "若有人兮山之阿，被薜荔兮带女萝。",
          title: "九歌·山鬼",
          author: "屈原",
          fit: "无名祠由山鬼、藤萝和祭辞支撑。"
        },
        thunder_marsh: {
          line: "雷填填兮雨冥冥。",
          title: "九歌·山鬼",
          author: "屈原",
          fit: "雷泽不靠晴空天雷，而是楚辞式山泽雷雨从地下压上来。"
        },
        white_feather_mire: {
          line: "鸿雁于飞，肃肃其羽。",
          title: "诗经·小雅·鸿雁",
          author: "佚名",
          fit: "白羽泥沼的羽、迁徙和失落感都落在这一句里。"
        },
        feather_folk_ford: {
          line: "谁谓河广，一苇杭之。",
          title: "诗经·卫风·河广",
          author: "佚名",
          fit: "羽民渡口讲过河与借路，轻舟一苇正好。"
        },
        black_teeth_market: {
          line: "氓之蚩蚩，抱布贸丝。",
          title: "诗经·卫风·氓",
          author: "佚名",
          fit: "黑齿市先是以物易物的边市，笑意和交易背后才藏着代价。"
        },
        dream_map_post: {
          line: "庄生晓梦迷蝴蝶，望帝春心托杜鹃。",
          title: "锦瑟",
          author: "李商隐",
          fit: "梦图驿把地图、梦和真假路径搅在一起。"
        },
        red_marsh: {
          line: "可怜无定河边骨，犹是春闺梦里人。",
          title: "陇西行",
          author: "陈陶",
          fit: "赤水外滩有骨、归梦和战后残响。"
        },
        broken_stele: {
          line: "前不见古人，后不见来者。",
          title: "登幽州台歌",
          author: "陈子昂",
          fit: "断碑读名时，过去与后来都断在碑前。"
        },
        kyushu_rift: {
          line: "路漫漫其修远兮，吾将上下而求索。",
          title: "离骚",
          author: "屈原",
          fit: "裂隙是地图尽头，也是继续求索的门。"
        },

        shaxu: {
          line: "大漠孤烟直，长河落日圆。",
          title: "使至塞上",
          author: "王维",
          fit: "沙墟以古河道与烽沙火把水写成硬通货。"
        },
        xuansu: {
          line: "瀚海阑干百丈冰，愁云惨淡万里凝。",
          title: "白雪歌送武判官归京",
          author: "岑参",
          fit: "玄素山以鱼骨契与冰道换取通行。"
        },
      },
      routes: {
        road_to_shaxu: {
          line: "黄沙百战穿金甲，不破楼兰终不还。",
          title: "从军行",
          author: "王昌龄",
          fit: "香灰尽头是沙墟，水比路重要。"
        },
        pass_to_xuansu: {
          line: "云横秦岭家何在？雪拥蓝关马不前。",
          title: "左迁至蓝关示侄孙湘",
          author: "韩愈",
          fit: "废关之外就是雪线，冰道只认鱼骨契。"
        },
      },
      events: {
        post_gate: {
          line: "劝君更尽一杯酒，西出阳关无故人。",
          title: "送元二使安西",
          author: "王维",
          fit: "出发前的送别和无人归路。"
        },
        split_tracks: {
          line: "行到水穷处，坐看云起时。",
          title: "终南别业",
          author: "王维",
          fit: "车辙分叉不是乐观转机，而是无路处暂辨云气和方向。"
        },
        closed_order: {
          line: "黄河远上白云间，一片孤城万仞山。",
          title: "凉州词",
          author: "王之涣",
          fit: "废关旧令要有孤城边塞的压迫。"
        },
        ground_thunder: {
          line: "夜阑卧听风吹雨，铁马冰河入梦来。",
          title: "十一月四日风雨大作",
          author: "陆游",
          fit: "泽鼓回雷，让车马与风雨都像从泥下梦里滚来。"
        },
        black_trade: {
          line: "半匹红绡一丈绫，系向牛头充炭直。",
          title: "卖炭翁",
          author: "白居易",
          fit: "黑齿交易强调不对等的价格和被迫交换。"
        },
        qingqiu_lamps: {
          line: "众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。",
          title: "青玉案·元夕",
          author: "辛弃疾",
          fit: "狐灯绕名，以灯火和回首制造诱惑。"
        },
        hollow_pass: {
          line: "空山不见人，但闻人语响。",
          title: "鹿柴",
          author: "王维",
          fit: "同穴分粮里看不见鸟鼠，只听得山腹替旅人分路。"
        },
        nameless_prayer: {
          line: "不知何处吹芦管，一夜征人尽望乡。",
          title: "夜上受降城闻笛",
          author: "李益",
          fit: "无名祠让旅人短暂望乡。"
        },
        sunken_feather: {
          line: "鸿雁于飞，肃肃其羽。",
          title: "诗经·小雅·鸿雁",
          author: "佚名",
          fit: "羽沉泥下，仍保留飞鸟的方向。"
        },
        feather_ford_debt: {
          line: "谁谓河广，一苇杭之。",
          title: "诗经·卫风·河广",
          author: "佚名",
          fit: "渡债是过河的代价。"
        },
        dream_map_gate: {
          line: "庄生晓梦迷蝴蝶，望帝春心托杜鹃。",
          title: "锦瑟",
          author: "李商隐",
          fit: "梦图入口需要梦与醒的错位。"
        },
        red_bones: {
          line: "可怜无定河边骨，犹是春闺梦里人。",
          title: "陇西行",
          author: "陈陶",
          fit: "赤水露骨时，人的姓名仍留在梦里。"
        },
        read_name: {
          line: "念天地之悠悠，独怆然而涕下。",
          title: "登幽州台歌",
          author: "陈子昂",
          fit: "读断碑姓名时，孤独感比信息更先到。"
        },
        rift_dream: {
          line: "魂兮归来，君无上天些。",
          title: "招魂",
          author: "屈原",
          fit: "裂隙前梦不是怀古，而是在边界处召回快要离身的神志。"
        },
        shaxu_well: {
          line: "大漠孤烟直，长河落日圆。",
          title: "使至塞上",
          author: "王维",
          fit: "沙墟古河道把水写成最硬的通货。"
        },
        xuansu_ice: {
          line: "瀚海阑干百丈冰，愁云惨淡万里凝。",
          title: "白雪歌送武判官归京",
          author: "岑参",
          fit: "玄素山以鱼骨契与冰道换取通行。"
        }
      },
      routeEvents: {
        wheel_omen: {
          line: "车辚辚，马萧萧，行人弓箭各在腰。",
          title: "兵车行",
          author: "杜甫",
          fit: "轮声异兆要先听见车马压路。"
        },
        roadside_shrine: {
          line: "神之格思，不可度思。",
          title: "诗经·大雅·抑",
          author: "佚名",
          fit: "路旁无名祠不应像寺院游赏，而是不可度量的旧神路标。"
        },
        black_cloud: {
          line: "黑云压城城欲摧，甲光向日金鳞开。",
          title: "雁门太守行",
          author: "李贺",
          fit: "黑云压境带来危险预兆。"
        },
        wenao_fish_rain: {
          line: "鸿雁长飞光不度，鱼龙潜跃水成文。",
          title: "春江花月夜",
          author: "张若虚",
          fit: "文鳐雨不是寻常鱼味，而是鱼龙、鳞光和车辙文字一起显形。"
        },
        dang_kang_field_cry: {
          line: "田家少闲月，五月人倍忙。",
          title: "观刈麦",
          author: "白居易",
          fit: "当康田鸣落在农事与粮草。"
        },
        xuan_gui_shell_bridge: {
          line: "水何澹澹，山岛竦峙。",
          title: "观沧海",
          author: "曹操",
          fit: "玄龟壳桥需要水面与巨物并现。"
        },
        zhu_bird_name_call: {
          line: "月出惊山鸟，时鸣春涧中。",
          title: "鸟鸣涧",
          author: "王维",
          fit: "朱鸟唤名从山鸟惊鸣里生出。"
        },
        fox_lamp_tail: {
          line: "东风夜放花千树，更吹落、星如雨。",
          title: "青玉案·元夕",
          author: "辛弃疾",
          fit: "狐尾灯适合灯火如星坠落的夜路。"
        },
        black_teeth_scale_price: {
          line: "半匹红绡一丈绫，系向牛头充炭直。",
          title: "卖炭翁",
          author: "白居易",
          fit: "黑齿秤价强调价格不公。"
        },
        ming_snake_crosswind: {
          line: "腾蛇乘雾，终为土灰。",
          title: "龟虽寿",
          author: "曹操",
          fit: "鸣蛇横风要有蛇、雾和凶兆，不只是水边天气。"
        },
        bone_ox_rut: {
          line: "白骨露于野，千里无鸡鸣。",
          title: "蒿里行",
          author: "曹操",
          fit: "骨牛空辙要把荒野、白骨和无人声先压出来。"
        },
        mirror_reed_bed: {
          line: "蒹葭苍苍，白露为霜。",
          title: "诗经·秦风·蒹葭",
          author: "佚名",
          fit: "镜芦荡先要有成片芦苇和白露。"
        },
        dream_cicada_shell: {
          line: "蝉噪林逾静，鸟鸣山更幽。",
          title: "入若耶溪",
          author: "王籍",
          fit: "梦蝉蜕壳在噪与静之间制造失真。"
        },
        rnd_loose_axle_song: {
          line: "腾蛇乘雾，终为土灰。",
          title: "龟虽寿",
          author: "曹操",
          fit: "鸣蛇入轴以蛇声和雾路提示车轴异常。"
        },
        rnd_bitter_grass_soup: {
          line: "采采卷耳，不盈顷筐。",
          title: "诗经·周南·卷耳",
          author: "佚名",
          fit: "祝余苦汤要从采草补饥开始，而不是现代补给包。"
        },
        rnd_wrong_milestone: {
          line: "行道迟迟，载渴载饥。",
          title: "诗经·小雅·采薇",
          author: "佚名",
          fit: "巫咸反里把行路迟滞和反向里程压在一起。"
        },
        rnd_silent_barter: {
          line: "日中为市，致天下之民。",
          title: "周易·系辞下",
          author: "佚名",
          fit: "黑齿影价是异国日中交易，不靠对白解释规则。"
        },
        rnd_repeated_footprints: {
          line: "道阻且长，溯游从之。",
          title: "诗经·秦风·蒹葭",
          author: "佚名",
          fit: "夸父复迹强调长路、回环和追逐过的痕迹。"
        },
        rnd_count_names_rest: {
          line: "魂兮归来，反故居些。",
          title: "楚辞·招魂",
          author: "屈原",
          fit: "巫咸点名是把散掉的魂和队伍名册重新收束。"
        },
        rnd_low_black_cloud_gap: {
          line: "黑云压城城欲摧，甲光向日金鳞开。",
          title: "雁门太守行",
          author: "李贺",
          fit: "雷泽云缝要有压低的云、迫近的危险和一线可行。"
        },
        rnd_breathing_map: {
          line: "日月安属？列星安陈？",
          title: "楚辞·天问",
          author: "屈原",
          fit: "烛龙息图让日月和山川秩序在纸面上呼吸。"
        },
        rnd_red_backflow: {
          line: "所谓伊人，在水一方。",
          title: "诗经·秦风·蒹葭",
          author: "佚名",
          fit: "赤水倒流把渡口推到看得见却走不到的地方。"
        },
        rnd_dream_toll: {
          line: "梦为远别啼难唤，书被催成墨未浓。",
          title: "无题",
          author: "李商隐",
          fit: "梦驿收梦钱，梦与信都要被抽税。"
        },
        rnd_feather_roll_call: {
          line: "鸿雁于飞，哀鸣嗷嗷。",
          title: "诗经·小雅·鸿雁",
          author: "佚名",
          fit: "羽民点名，应声就是认下一笔旧名债。"
        },
        rnd_stele_names: {
          line: "今人不见古时月，今月曾经照古人。",
          title: "把酒问月",
          author: "李白",
          fit: "断碑回名把古人与行路人写在同一列。"
        },
        rnd_black_scale_debt: {
          line: "商人重利轻别离，前月浮梁买茶去。",
          title: "琵琶行",
          author: "白居易",
          fit: "黑齿追鳞只认账，不认人。"
        },
        rnd_marsh_drum_rest: {
          line: "殷其雷，在南山之阳。",
          title: "诗经·召南·殷其雷",
          author: "佚名",
          fit: "泽鼓歇脚靠雷声定拍，泥水才肯让路。"
        },
        rnd_pass_seal_ledger: {
          line: "羌笛何须怨杨柳，春风不度玉门关。",
          title: "凉州词",
          author: "王之涣",
          fit: "废关补封，旧令与关口都在提醒西行不可回头。"
        },
        rnd_burrow_clay_echo: {
          line: "山光悦鸟性，潭影空人心。",
          title: "题破山寺后禅院",
          author: "常建",
          fit: "鸟鼠土声把山腹写成一间看得见却走不进的屋子。"
        },
        rnd_market_eye_price: {
          line: "天下熙熙，皆为利来；天下攘攘，皆为利往。",
          title: "史记·货殖列传",
          author: "司马迁",
          fit: "黑齿目价把记忆也标上价码。"
        },
        rnd_mire_feather_toll: {
          line: "蒹葭苍苍，白露为霜。",
          title: "诗经·秦风·蒹葭",
          author: "佚名",
          fit: "白羽渡资仍是一次看得见对岸、未必过得去的渡水。"
        },
        rnd_dream_ink_rain: {
          line: "庄生晓梦迷蝴蝶，望帝春心托杜鹃。",
          title: "锦瑟",
          author: "李商隐",
          fit: "梦图墨雨把地名与梦一起冲淡。"
        },
        rnd_oldroad_milepost: {
          line: "行行重行行，与君生别离。",
          title: "古诗十九首",
          author: "佚名",
          fit: "空里程把归期刻成一道一道看不见的数字。"
        },
        rnd_last_grain_cache: {
          line: "锄禾日当午，汗滴禾下土。",
          title: "悯农",
          author: "李绅",
          fit: "荒窖残粟是饿到极处才遇见的粮。"
        },
        rnd_marsh_reed_omen: {
          line: "蒹葭采采，白露未已。",
          title: "诗经·秦风·蒹葭",
          author: "佚名",
          fit: "芦荡异声把浅路藏进一片会说话的芦苇。"
        },
        rnd_red_bone_market: {
          line: "白骨露于野，千里无鸡鸣。",
          title: "蒿里行",
          author: "曹操",
          fit: "赤水骨市把路费写成骨头与名字。"
        },
        rnd_stele_ink_well: {
          line: "笔落惊风雨，诗成泣鬼神。",
          title: "寄李十二白二十韵",
          author: "杜甫",
          fit: "断碑墨井让巫辞从井水里自己写出来。"
        },
        rnd_qingqiu_lamp_debt: {
          line: "青青子衿，悠悠我心。",
          title: "诗经·郑风·子衿",
          author: "佚名",
          fit: "青丘灯债把一盏灯记成一个人情。"
        },
        rnd_qingqiu_name_toll: {
          line: "名不正则言不顺。",
          title: "论语·子路",
          author: "孔子门人",
          fit: "青丘还名把称呼也变成过关的代价。"
        },
        rnd_mire_sunken_bell: {
          line: "钟鼓将将，淮水汤汤。",
          title: "诗经·小雅·鼓钟",
          author: "佚名",
          fit: "白羽沉钟让水底的钟声替车队定拍。"
        },
        rnd_central_old_ledger: {
          line: "烽火连三月，家书抵万金。",
          title: "春望",
          author: "杜甫",
          fit: "驿账残页把归期与家书写在同一页上。"
        },
        rnd_market_salt_price: {
          line: "市列珠玑，户盈罗绮。",
          title: "望海潮",
          author: "柳永",
          fit: "黑齿盐价把定神之物也摆上市口。"
        },
        rnd_shrine_ash_face: {
          line: "祭如在，祭神如神在。",
          title: "论语·八佾",
          author: "孔子门人",
          fit: "祠灰照面让祭所替人照见自己。"
        },
        rnd_qingqiu_lamp_moth: {
          line: "暗飞萤自照，水宿鸟相呼。",
          title: "倦夜",
          author: "杜甫",
          fit: "青丘灯蛾以微光替车队指路。"
        },
        rnd_pass_broken_arrow: {
          line: "折戟沉沙铁未销，自将磨洗认前朝。",
          title: "赤壁",
          author: "杜牧",
          fit: "废关断镞把关墙旧战重新翻出来。"
        },
        rnd_burrow_rat_king: {
          line: "硕鼠硕鼠，无食我黍。",
          title: "诗经·魏风·硕鼠",
          author: "佚名",
          fit: "鸟鼠鼠王守着洞里最后一仓粮。"
        },
        rnd_shrine_back_road: {
          line: "曲径通幽处，禅房花木深。",
          title: "题破山寺后禅院",
          author: "常建",
          fit: "祠后旧路把祭所与野径接在一起。"
        },
        rnd_market_bone_coin: {
          line: "金樽清酒斗十千，玉盘珍羞直万钱。",
          title: "行路难",
          author: "李白",
          fit: "黑齿骨钱把市价写得比钱本身还轻。"
        },
        rnd_marsh_wildfire: {
          line: "野火烧不尽，春风吹又生。",
          title: "赋得古原草送别",
          author: "白居易",
          fit: "雷泽野火贴着水面烧，路却从火后长出来。"
        },
        rnd_realm_shaxu: {
          line: "大漠孤烟直，长河落日圆。",
          title: "使至塞上",
          author: "王维",
          fit: "沙墟以水与沙丘移位作为第一道生存门槛。"
        },
        rnd_realm_cangwu: {
          line: "瘴江南去入云烟，望尽黄茆是海边。",
          title: "岭南江行",
          author: "柳宗元",
          fit: "苍梧瘴气用骨笛与药草把方向变成赌注。"
        },
        rnd_realm_wanqiu: {
          line: "潮平两岸阔，风正一帆悬。",
          title: "次北固山下",
          author: "王湾",
          fit: "万丘海只在退潮时给一辆车让出礁缝。"
        },
        rnd_realm_xuansu: {
          line: "瀚海阑干百丈冰，愁云惨淡万里凝。",
          title: "白雪歌送武判官归京",
          author: "岑参",
          fit: "玄素山以冰道与鱼骨契换取通行。"
        },
        rnd_realm_chixiao: {
          line: "火山五月行人少，看君马去疾如鸟。",
          title: "武威送刘判官赴碛西行军",
          author: "岑参",
          fit: "赤霄谷用淬火与琉璃把车轴变成消耗品。"
        },
        rnd_realm_luochen: {
          line: "吴宫花草埋幽径，晋代衣冠成古丘。",
          title: "登金陵凤凰台",
          author: "李白",
          fit: "洛尘古国的过路礼让拾取本身成为风险。"
        },
        rnd_realm_cuiyou: { line: "空山不见人，但闻人语响。", title: "鹿柴", author: "王维", fit: "翠幽檀的菌田用蓝光指水。", },
        rnd_realm_fenghuo: { line: "黄沙百战穿金甲，不破楼兰终不还。", title: "从军行", author: "王昌龄", fit: "烽沙火为沙下亡魂与远行车队引路。", },
        rnd_realm_huangu: { line: "深林人不知，明月来相照。", title: "竹里馆", author: "王维", fit: "苍梧换骨节只在密林深处进行。", },
        rnd_realm_liudeng: { line: "海上生明月，天涯共此时。", title: "望月怀远", author: "张九龄", fit: "万丘流灯把一年祈愿交给潮水。", },
        rnd_realm_zaobing: { line: "千山鸟飞绝，万径人踪灭。", title: "江雪", author: "柳宗元", fit: "玄素凿冰祭以一炷香换通行。", },
        rnd_realm_wumian: { line: "可怜无定河边骨，犹是春闺梦里人。", title: "陇西行", author: "陈陶", fit: "赤霄无面村把劳作的人写成摆件。", },
        rnd_realm_fanshui: { line: "旧时王谢堂前燕，飞入寻常百姓家。", title: "乌衣巷", author: "刘禹锡", fit: "洛尘翻水让古国在夜里重新出现。", },
        rnd_realm_qinling: { line: "云横秦岭家何在？雪拥蓝关马不前。", title: "左迁至蓝关示侄孙湘", author: "韩愈", fit: "秦岭追兵把官道变成一次选择。", },
        rnd_central_riders: { line: "马上相逢无纸笔，凭君传语报平安。", title: "逢入京使", author: "岑参", fit: "驿路骑手把文牒与口信一起带来。", },
        rnd_qingqiu_mask: { line: "假作真时真亦假，无为有处有还无。", title: "红楼梦", author: "曹雪芹", fit: "青丘面具让名字可以买卖。", },
        rnd_shrine_bell: { line: "姑苏城外寒山寺，夜半钟声到客船。", title: "枫桥夜泊", author: "张继", fit: "无名祠钟声替车队数人数。", },
        rnd_pass_toll: { line: "只解沙场为国死，何须马革裹尸还。", title: "出塞", author: "徐锡麟", fit: "废关关钱仍在收，只是收的人没有脸。", },
        rnd_burrow_eggs: { line: "谁道群生性命微，一般骨肉一般皮。", title: "鸟", author: "白居易", fit: "鸟鼠卵把山里的取留规矩摆到面前。", },
        rnd_market_teeth: { line: "辅车相依，唇亡齿寒。", title: "左传·僖公五年", author: "左丘明", fit: "黑齿换牙把身体也变成货。", },
        rnd_marsh_boat: { line: "春潮带雨晚来急，野渡无人舟自横。", title: "滁州西涧", author: "韦应物", fit: "无主小舟在雷泽等一个还粮的人。", },
        rnd_stele_echo: { line: "古人今人若流水，共看明月皆如此。", title: "把酒问月", author: "李白", fit: "断碑回声把过去与现在念成同一列名字。", },
        rnd_qingqiu_tail: { line: "狐死首丘，仁也。", title: "礼记·檀弓", author: "佚名", fit: "青丘尾火照出名字与来处。", },
        rnd_pass_seal: { line: "一夫当关，万夫莫开。", title: "蜀道难", author: "李白", fit: "废关封泥仍在替旧朝守门。", },
        rnd_burrow_wind: { line: "空山松子落，幽人应未眠。", title: "秋夜寄邱员外", author: "韦应物", fit: "鸟鼠穴风把山腹写成有人住的地方。", },
        rnd_market_scale: { line: "称彼兕觥，万寿无疆。", title: "诗经·豳风·七月", author: "佚名", fit: "黑齿鳞秤把重量与名字一起称。", },
        rnd_marsh_mist: { line: "蒹葭苍苍，白露为霜。", title: "诗经·秦风·蒹葭", author: "佚名", fit: "雷泽雾用芦火把路藏起来。", },
        rnd_mire_feather: { line: "鸿雁于飞，肃肃其羽。", title: "诗经·小雅·鸿雁", author: "佚名", fit: "白羽换羽把沉下去的羽毛变成通货。", },
        rnd_stele_moss: { line: "苔痕上阶绿，草色入帘青。", title: "陋室铭", author: "刘禹锡", fit: "断碑苔下压着尚未读完的巫辞。", },
        rnd_dream_lamp: { line: "何当共剪西窗烛，却话巴山夜雨时。", title: "夜雨寄北", author: "李商隐", fit: "梦驿灯替未归的人留一盏。", },
        rnd_red_salt: { line: "若作和羹，尔惟盐梅。", title: "尚书·说命", author: "佚名", fit: "赤水盐能压神，也能换粮。", },
        rnd_ridge_wind: { line: "风急天高猿啸哀，渚清沙白鸟飞回。", title: "登高", author: "杜甫", fit: "山脊风把旧王朝的鼓角吹回来。", },
        rnd_ford_net: { line: "渔翁夜傍西岩宿，晓汲清湘燃楚竹。", title: "渔翁", author: "柳宗元", fit: "羽民渡网把旧铜印与鱼一起捞上来。", },
        rnd_black_salt: { line: "沧浪之水清兮，可以濯吾缨。", title: "楚辞·渔父", author: "佚名", fit: "黑齿盐井把身体与货换成一袋盐。", },
        rnd_marsh_lantern: { line: "春江潮水连海平，海上明月共潮生。", title: "春江花月夜", author: "张若虚", fit: "雷泽河灯把名字交给潮水。", },
        rnd_dream_ledger: { line: "醉后不知天在水，满船清梦压星河。", title: "题龙阳县青草湖", author: "唐温如", fit: "梦驿旧账记的是过路车队欠下的梦。", },
        rnd_road_boneshell: { line: "白骨露于野，千里无鸡鸣。", title: "蒿里行", author: "曹操", fit: "故道骨贝把旧朝市价埋进车辙。", },
        rnd_pass_lantern: { line: "醉卧沙场君莫笑，古来征战几人回。", title: "凉州词", author: "王翰", fit: "废关残灯还替三十年前的守军亮着。", },
        rnd_post_roster: { line: "少小离家老大回，乡音无改鬓毛衰。", title: "回乡偶书", author: "贺知章", fit: "驿卒名册把过路者写成待补的名字。", },
        rnd_bird_dust: { line: "大漠风尘日色昏，红旗半卷出辕门。", title: "从军行", author: "王昌龄", fit: "鸟鼠尘落成粮壳，也落成旧路。", },
        rnd_qingqiu_credit: { line: "氓之蚩蚩，抱布贸丝。", title: "诗经·卫风·氓", author: "佚名", fit: "青丘赊账只记名字，不记日子。", },
        rnd_red_ferry: { line: "渡远荆门外，来从楚国游。", title: "渡荆门送别", author: "李白", fit: "赤水渡口收粮，也收一句真话。", },
        rnd_mire_reed: { line: "纵一苇之所如，凌万顷之茫然。", title: "赤壁赋", author: "苏轼", fit: "白羽淖苇丛学着离开的人说话。", },
        rnd_stele_rubbing: { line: "功名富贵若长在，汉水亦应西北流。", title: "江上吟", author: "李白", fit: "断碑拓片把名字从石上移到纸上。", },
        rnd_dream_bell: { line: "万籁此都寂，但余钟磬音。", title: "题破山寺后禅院", author: "常建", fit: "梦驿夜钟把等门的人一声声敲近。", },
        rnd_black_ledger: { line: "三寸之舌，强于百万之师。", title: "史记·平原君虞卿列传", author: "司马迁", fit: "黑齿齿账用一颗牙抵一桩旧事。", },
        rnd_shrine_ash: { line: "纸灰飞作白蝴蝶，泪血染成红杜鹃。", title: "清明日对酒", author: "高翥", fit: "无名祠香灰平整，像等人写下名字。", },
        rnd_pass_arrow: { line: "挽弓当挽强，用箭当用长。", title: "前出塞", author: "杜甫", fit: "废关箭孔里的锈箭头还在震。", },
        rnd_post_well: { line: "问渠那得清如许？为有源头活水来。", title: "观书有感", author: "朱熹", fit: "驿井照出比实际多一辆的车队。", },
        rnd_marsh_mud: { line: "泥上偶然留指爪，鸿飞那复计东西。", title: "和子由渑池怀旧", author: "苏轼", fit: "雷泽泥面带走了前车的辙。", },
        rnd_feather_tide: { line: "君看一叶舟，出没风波里。", title: "江上渔者", author: "范仲淹", fit: "羽民潮约把粮与名字分开定价。", },
        rnd_dream_key: { line: "梦里不知身是客，一晌贪欢。", title: "浪淘沙令", author: "李煜", fit: "梦驿铜钥的锁孔在柜台里面。", }
      },
      crisisEvents: {
        axle: {
          line: "行路难，行路难，多歧路，今安在。",
          title: "行路难",
          author: "李白",
          fit: "断轴时路多而车不能行。"
        },
        grain: {
          line: "谁知盘中餐，粒粒皆辛苦。",
          title: "悯农",
          author: "李绅",
          fit: "饥荒补救必须先落到粮食本身。"
        },
        sanity: {
          line: "梦里不知身是客，一晌贪欢。",
          title: "浪淘沙令",
          author: "李煜",
          fit: "失神时人分不清身在梦内还是路上。"
        }
      },
      endings: {
        rift: {
          line: "遂古之初，谁传道之？",
          title: "天问",
          author: "屈原",
          fit: "入裂隙不是远别，而是抵达世界无法回答的开端问题。"
        },
        return_true: {
          line: "羁鸟恋旧林，池鱼思故渊。",
          title: "归园田居",
          author: "陶渊明",
          fit: "实录归返：人回到旧林，名字留在总志里。"
        },
        return_polished: {
          line: "羁鸟恋旧林，池鱼思故渊。",
          title: "归园田居",
          author: "陶渊明",
          fit: "粉饰归返：人也回到旧林，民疾被留在路外。"
        },
        lost_mind: {
          line: "遂古之初，谁传道之？",
          title: "天问",
          author: "屈原",
          fit: "低神志入裂隙，队伍连名字都留在世界无法回答的地方。"
        },
        return: {
          line: "羁鸟恋旧林，池鱼思故渊。",
          title: "归园田居",
          author: "陶渊明",
          fit: "归中原是残队回到旧世界，但已经带着荒外污染。"
        },
        burn: {
          line: "往者不可谏，来者犹可追。",
          title: "论语·微子",
          author: "孔子门人",
          fit: "焚志远走不是归返，而是拒绝让王朝替这趟远行写下结论。"
        },
        stranded: {
          line: "溯洄从之，道阻且长。",
          title: "诗经·秦风·蒹葭",
          author: "佚名",
          fit: "旅途断绝不是黄昏感伤，而是路明明在前却再也走不到。"
        }
      }
    },
    fallbackPoems: {
      road: [
        {
          title: "关中言怀",
          author: "黄滔",
          dynasty: "唐",
          type: "五言律诗",
          lines: ["三秦五岭意，不得不依然。", "迹寓枯槐曲，业芜芳草川。"],
          note: "诗泉 API 缓存样本，适合旧道、枯槐、荒草路段。"
        },
        {
          title: "使至塞上",
          author: "王维",
          dynasty: "唐",
          type: "五言律诗",
          lines: ["大漠孤烟直", "长河落日圆"],
          note: "可作为旧道、驿路、车队远行的氛围底色。"
        },
        {
          title: "终南别业",
          author: "王维",
          dynasty: "唐",
          type: "五言律诗",
          lines: ["行到水穷处", "坐看云起时"],
          note: "适合路线显影或无路处暂歇。"
        }
      ],
      market: [
        {
          title: "鼓吹曲辞 雉子班",
          author: "李白",
          dynasty: "唐",
          type: "乐府诗",
          lines: ["辟邪伎作鼓吹惊，雉子班之奏曲成。", "所贵旷士怀，朗然合太清。"],
          note: "诗泉 API 缓存样本，可转为辟邪铃、市口鼓吹或异族仪式。"
        },
        {
          title: "客中作",
          author: "李白",
          dynasty: "唐",
          type: "七言绝句",
          lines: ["兰陵美酒郁金香", "玉碗盛来琥珀光"],
          note: "可转为边市交易、异乡停驻的文案钩子。"
        },
        {
          title: "问刘十九",
          author: "白居易",
          dynasty: "唐",
          type: "五言绝句",
          lines: ["绿蚁新醅酒", "红泥小火炉"],
          note: "可为危险市口保留一点人间暖意。"
        }
      ],
      water: [
        {
          title: "贺新郎",
          author: "葛长庚",
          dynasty: "宋",
          type: "宋词",
          lines: ["目断水苍山翠。", "更送客、长亭分袂。"],
          note: "诗泉 API 缓存样本，适合水泽送别、长亭渡口与远山压境。"
        },
        {
          title: "春江花月夜",
          author: "张若虚",
          dynasty: "唐",
          type: "乐府诗",
          lines: ["春江潮水连海平", "海上明月共潮生"],
          note: "适合雷泽、赤水、羽民渡的水面异象。"
        },
        {
          title: "次北固山下",
          author: "王湾",
          dynasty: "唐",
          type: "五言律诗",
          lines: ["潮平两岸阔", "风正一帆悬"],
          note: "可转为渡口、浅水、短暂顺风的提示。"
        }
      ],
      rift: [
        {
          title: "礼魂",
          author: "屈原",
          dynasty: "先秦",
          type: "楚辞",
          lines: ["成礼兮会鼓，", "传芭兮代舞"],
          note: "诗泉 API 缓存样本，适合裂隙前仪式、巫文和祭所。"
        },
        {
          title: "离骚",
          author: "屈原",
          dynasty: "先秦",
          type: "楚辞",
          lines: ["路漫漫其修远兮", "吾将上下而求索"],
          note: "适合作为裂隙前的方向感与执念。"
        },
        {
          title: "观沧海",
          author: "曹操",
          dynasty: "两汉",
          type: "四言古诗",
          lines: ["日月之行，若出其中", "星汉灿烂，若出其里"],
          note: "可用于梦图、星象、纸面边界变大的时刻。"
        }
      ]
    }
  }
};

const BSI_CORE_AUDIO = {
  audioAssets: {
    musicLoop: {
      id: "MUS-CORE-001",
      name: "九州古道 WebDemo 低响度预览",
      src: "../../06_音乐音效/04_待复核素材/WebDemo低响度预览/MUS-CORE-001_jiuzhou_ancient_road_webdemo_-24lufs.mp3",
      type: "music",
      loop: true,
      volume: 0.16,
      status: "review-pending"
    },
    musicWater: {
      id: "MUS-CORE-003",
      name: "水泽夜行 WebDemo 低响度预览",
      src: "../../06_音乐音效/04_待复核素材/WebDemo低响度预览/MUS-CORE-003_marsh_night_webdemo_-24lufs.mp3",
      type: "music",
      loop: true,
      volume: 0.14,
      status: "review-pending"
    },
    musicMountain: {
      id: "MUS-CORE-002",
      name: "山岭云行 WebDemo 低响度预览",
      src: "../../06_音乐音效/04_待复核素材/WebDemo低响度预览/MUS-CORE-002_mountain_clouds_webdemo_-24lufs.mp3",
      type: "music",
      loop: true,
      volume: 0.14,
      status: "review-pending"
    },
    musicBorder: {
      id: "MUS-CORE-004",
      name: "废墟边境 WebDemo 低响度预览",
      src: "../../06_音乐音效/04_待复核素材/WebDemo低响度预览/MUS-CORE-004_ruins_border_webdemo_-24lufs.mp3",
      type: "music",
      loop: true,
      volume: 0.14,
      status: "review-pending"
    },
    musicJourney: {
      id: "MUS-CORE-005",
      name: "神秘九州行 WebDemo 低响度预览",
      src: "../../06_音乐音效/04_待复核素材/WebDemo低响度预览/MUS-CORE-005_instrumental_mystic_journey_guzheng_pipa_webdemo_-24lufs.mp3",
      type: "music",
      loop: true,
      volume: 0.15,
      status: "review-pending"
    },
    musicDawn: {
      id: "MUS-CORE-006",
      name: "春晓清行 WebDemo 低响度预览",
      src: "../../06_音乐音效/04_待复核素材/WebDemo低响度预览/MUS-CORE-006_spring_dawn_instrumental_webdemo_-24lufs.mp3",
      type: "music",
      loop: true,
      volume: 0.13,
      status: "review-pending"
    },
    musicAiJourney: {
      id: "MUS-AI-001",
      name: "AI 旅途主题（待听）",
      src: "../../06_音乐音效/AI生成_2026-10-18/jiuzhou-journey-theme-loop.mp3",
      type: "music",
      loop: true,
      volume: 0.14,
      status: "approved"
    },
    musicAiLowSanity: {
      id: "MUS-AI-002",
      name: "AI 低神志层（待听）",
      src: "../../06_音乐音效/AI生成_2026-10-18/jiuzhou-low-sanity-loop.mp3",
      type: "music",
      loop: true,
      volume: 0.12,
      status: "approved"
    },
    musicAiCrisis: {
      id: "MUS-AI-003",
      name: "AI 危机与追兵（待听）",
      src: "../../06_音乐音效/AI生成_2026-10-18/v2/crisis-v2-loop.mp3",
      type: "music",
      loop: true,
      volume: 0.12,
      status: "approved"
    },
    musicAiEndingRift: {
      id: "MUS-AI-004",
      name: "AI 入裂隙结局（待听）",
      src: "../../06_音乐音效/AI生成_2026-10-18/v2/rift-v2-loop.mp3",
      type: "music",
      loop: true,
      volume: 0.14,
      status: "approved"
    },
    musicAiEndingReturn: {
      id: "MUS-AI-005",
      name: "AI 归中原结局（待听）",
      src: "../../06_音乐音效/AI生成_2026-10-18/jiuzhou-ending-return-loop.mp3",
      type: "music",
      loop: true,
      volume: 0.14,
      status: "approved"
    },
    ambAiShaxu: {
      id: "AMB-AI-001", name: "AI 沙墟风沙（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-shaxu-60s-norm.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "approved"
    },
    ambAiCangwu: {
      id: "AMB-AI-002", name: "AI 苍梧瘴林（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/v2/cangwu-amb-v2-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "approved"
    },
    ambAiWanqiu: {
      id: "AMB-AI-003", name: "AI 万丘海潮（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-wanqiu-60s-norm.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "approved"
    },
    ambAiXuansu: {
      id: "AMB-AI-004", name: "AI 玄素寒风（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-xuansu-60s-norm.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "approved"
    },
    ambAiChixiao: {
      id: "AMB-AI-005", name: "AI 赤霄火山（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-chixiao-60s-norm.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "approved"
    },
    ambAiCuiyou: {
      id: "AMB-AI-006", name: "AI 翠幽夜林（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-cuiyou-60s-norm.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "approved"
    },
    ambAiLuochen: {
      id: "AMB-AI-007", name: "AI 洛尘废墟（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-luochen-60s-norm.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "approved"
    },
    sanityWhisper: {
      id: "SAN-AI-001", name: "AI 低神志贴耳低语", src: "../../06_音乐音效/AI生成_2026-10-18/v2/whisper-v2-2s.mp3",
      type: "ui", loop: false, volume: 0.18, status: "approved"
    },
    travelStep: {
      id: "STEP-AI-001", name: "AI 车旁脚步", src: "../../06_音乐音效/AI生成_2026-10-18/sfx-footstep-2s.mp3",
      type: "ui", loop: false, volume: 0.14, status: "approved"
    },
    titleTheme: {
      id: "MUS-AI-006",
      name: "AI 标题·苍茫（待听）",
      src: "../../06_音乐音效/AI生成_2026-10-18/title-theme-v2-loop.mp3",
      type: "music",
      loop: true,
      volume: 0.12,
      status: "review-pending"
    },
    ambAiCentral: {
      id: "AMB-AI-008", name: "AI 中原驿清晨（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-central-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiBlackteeth: {
      id: "AMB-AI-009", name: "AI 黑齿市集（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-blackteeth-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiDreammap: {
      id: "AMB-AI-010", name: "AI 梦图驿夜（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-dreammap-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiOldroad: {
      id: "AMB-AI-011", name: "AI 故王道（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-oldroad-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiQingqiu: {
      id: "AMB-AI-012", name: "AI 青丘外邑（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-qingqiu-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiPass: {
      id: "AMB-AI-013", name: "AI 废关（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-pass-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiShrine: {
      id: "AMB-AI-014", name: "AI 无名祠（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-shrine-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiThunder: {
      id: "AMB-AI-015", name: "AI 雷泽（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-thunder-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiFeather: {
      id: "AMB-AI-016", name: "AI 白羽淖（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-feather-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiBirdmouse: {
      id: "AMB-AI-017", name: "AI 鸟鼠夹道（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-birdmouse-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiFeatherford: {
      id: "AMB-AI-018", name: "AI 羽民渡（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-featherford-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiRedmarsh: {
      id: "AMB-AI-019", name: "AI 赤水外滩（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-redmarsh-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiStele: {
      id: "AMB-AI-020", name: "AI 巫咸断碑（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-stele-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    ambAiRift: {
      id: "AMB-AI-021", name: "AI 九州裂隙（60s）", src: "../../06_音乐音效/AI生成_2026-10-18/amb-rift-60s.mp3",
      type: "ambience", loop: true, volume: 0.05, status: "review-pending"
    },
    sanityLight: {
      id: "SAN-001-SYN",
      name: "轻度污染程序占位循环",
      src: "../../06_音乐音效/04_待复核素材/程序生成占位音效/SAN-001_light_sanity_layer_synth_placeholder_loop.mp3",
      type: "sanity",
      loop: true,
      volume: 0.08,
      status: "demo-temporary"
    },
    sanityLow: {
      id: "SAN-002-SYN",
      name: "重度污染低频程序占位循环",
      src: "../../06_音乐音效/04_待复核素材/程序生成占位音效/SAN-002_heavy_sanity_layer_synth_placeholder_loop.mp3",
      type: "sanity-low",
      loop: true,
      volume: 0.13,
      status: "demo-temporary"
    },
    travelAmbience: {
      id: "AMB-TRAVEL-001-SYN",
      name: "荒外风与车架空气层程序占位循环",
      src: "../../06_音乐音效/04_待复核素材/程序生成占位音效/AMB-TRAVEL-001_travel_air_wood_frame_placeholder_loop.mp3",
      type: "ambience",
      loop: true,
      volume: 0.045,
      status: "demo-temporary"
    },
    select: {
      id: "UI-001-SYN",
      name: "选择确认程序占位",
      src: "../../06_音乐音效/04_待复核素材/程序生成占位音效/UI-001_select_confirm_synth_placeholder.mp3",
      type: "ui",
      loop: false,
      volume: 0.28,
      status: "approved"
    },
    routeSelect: {
      id: "ROUTE-CONFIRM-001",
      name: "路引签确认占位",
      src: "../../06_音乐音效/AI生成_2026-10-18/sfx-brush-v2-2s.mp3",
      type: "ui",
      loop: false,
      volume: 0.26,
      status: "demo-temporary"
    },
    resourceDown: {
      id: "UI-003-SYN",
      name: "资源减少程序占位",
      src: "../../06_音乐音效/04_待复核素材/程序生成占位音效/UI-003_resource_decrease_synth_placeholder.mp3",
      type: "ui",
      loop: false,
      volume: 0.28,
      status: "demo-temporary"
    },
    resourceUp: {
      id: "UI-004-SYN",
      name: "补给获得程序占位",
      src: "../../06_音乐音效/04_待复核素材/程序生成占位音效/UI-004_supply_gain_synth_placeholder.mp3",
      type: "ui",
      loop: false,
      volume: 0.28,
      status: "demo-temporary"
    },
    supplyComplete: {
      id: "SUPPLY-GAIN-001",
      name: "补给完成占位",
      src: "../../06_音乐音效/AI生成_2026-10-18/sfx-supply-v2-2s.mp3",
      type: "ui",
      loop: false,
      volume: 0.26,
      status: "demo-temporary"
    },
    warnAxle: {
      id: "WARN-001-SYN",
      name: "车轴危急程序占位",
      src: "../../06_音乐音效/04_待复核素材/程序生成占位音效/WARN-001_axle_crisis_synth_placeholder.mp3",
      type: "warning",
      loop: false,
      volume: 0.36,
      status: "approved"
    },
    warnGrain: {
      id: "WARN-002-SYN",
      name: "粮草危急程序占位",
      src: "../../06_音乐音效/04_待复核素材/程序生成占位音效/WARN-002_food_crisis_synth_placeholder.mp3",
      type: "warning",
      loop: false,
      volume: 0.34,
      status: "approved"
    },
    warnSanity: {
      id: "WARN-003-SYN",
      name: "神志危急程序占位",
      src: "../../06_音乐音效/04_待复核素材/程序生成占位音效/WARN-003_sanity_crisis_synth_placeholder.mp3",
      type: "warning",
      loop: false,
      volume: 0.34,
      status: "demo-temporary"
    },
    mapOpen: {
      id: "MAP-OPEN-001",
      name: "地图打开临时确认音",
      src: "../../06_音乐音效/AI生成_2026-10-18/sfx-map-open-v2-2s.mp3",
      type: "map-sfx",
      loop: false,
      volume: 0.2,
      status: "demo-temporary"
    },
    mapReveal: {
      id: "MAP-FOG-001",
      name: "地图显影临时发现音",
      src: "../../06_音乐音效/04_待复核素材/程序生成占位音效/UI-004_supply_gain_synth_placeholder.mp3",
      type: "map-sfx",
      loop: false,
      volume: 0.16,
      status: "approved"
    },
    locationArrive: {
      id: "CITY-ARRIVE-001",
      name: "地点抵达临时落点音",
      src: "../../06_音乐音效/04_待复核素材/程序生成占位音效/UI-004_supply_gain_synth_placeholder.mp3",
      type: "map-sfx",
      loop: false,
      volume: 0.2,
      status: "approved"
    }
  },
  audioHooks: {
    mapOpen: "mapOpen",
    mapReveal: "mapReveal",
    locationArrive: "locationArrive",
    routeSelect: "routeSelect",
    supplyComplete: "supplyComplete"
  }
};

BSI_P0_CONTENT_PACK.musicProfileByTerrain = {
    default: "musicLoop",
    road: "musicLoop",
    market: "musicBorder",
    water: "musicWater",
    rift: "musicBorder"
};

BSI_P0_CONTENT_PACK.musicProfileByLocation = {
    old_king_road: "musicJourney",
    bird_mouse_pass: "musicMountain",
    nameless_shrine: "musicJourney",
    qingqiu_outer_city: "musicDawn",
    black_teeth_market: "musicDawn",
    feather_folk_ford: "musicDawn"
};

BSI_P0_CONTENT_PACK.initialStateTemplate = {
    day: 1,
    currentLocation: "central_post",
    resources: { axle: 74, grain: 88, sanity: 82 },
    items: ["辟邪铃", "旧车具"],
    languages: { feather: 0, wuxian: 0 },
    flags: [],
    eventResults: {},
    routeEventResults: {},
    pendingRoute: null,
    discoveredLocations: ["central_post"],
    traveledRoutes: [],
    revealedRoutes: [],
    hintedLocations: [],
    hintedRoutes: [],
    routePoolSelections: {},
    lastReveal: null,
    usedSupplies: {},
    arrivalSupplyUsed: false,
    status: "playing",
    ending: "",
    crisisType: "",
    failureType: "",
    badLuckMeter: 0,
    failureStats: {
      axleCrises: 0,
      grainCrises: 0,
      sanityCrises: 0,
      routeLocks: 0,
      rescues: 0,
      hardFailures: 0
    },
    log: ["第 1 日：车队自中原驿整装，西路未明。"]
  };

window.BSI_CONTENT_PACKS = {
  ...(window.BSI_CONTENT_PACKS || {}),
  [BSI_P0_CONTENT_PACK.id]: BSI_P0_CONTENT_PACK
};
window.BSI_GAME_DATA = { ...BSI_CORE_DATA, ...BSI_CORE_AUDIO, ...BSI_P0_CONTENT_PACK };

// Chapter 2 node: Cangwu. Appended after the main literal to avoid structural edits.
(function (d) {
  d.locations.cangwu = {
    id: "cangwu",
    name: "苍梧",
    region: "南疆雨林",
    terrain: "water",
    event: "cangwu_miasma",
    generatedArt: false,
    map: { x: 10, y: 42, step: 3 },
    arrivalText: "雨林把官道吞成一条水线，骨笛声从瘴气深处传来。",
    detail: "苍梧湿热，密林遮天，瘴气沿河谷起落。云螭氏住干栏屋，以骨笛传讯，换骨节时整族闭寨。朝廷的采血藤官吏在寨外设卡，把雨林写成可开发的药山。",
    sanityDetails: {
      uneasy: "骨笛声从三个方向传来，三短一长。你们分不清哪一声是引路，哪一声是驱赶。",
      mad: "林子开始学你们说话，先用随从的声音，再用你们自己的。"
    },
    supplyDiscoveryText: "干栏屋下挂着药草与熏鱼，云螭氏留了一份给过路人。",
    fieldNote: {
      category: "异闻",
      subject: "骨笛与换骨节",
      evidence: "云螭氏以骨笛传讯，换骨节时闭寨祭骨。",
      clue: "苍梧的路靠笛声与药草辨认，瘴气起时不可硬行。",
      effect: { axle: 0, grain: -1, sanity: 1 }
    },
    supplies: [
      { id: "cangwu_herb", label: "采瘴边药草", hint: "粮草 +6，神志 -2", effect: { axle: 0, grain: 6, sanity: -2 }, result: "你们采了一束瘴边药草，能换粮，也能压瘴。谁也没有先闻。" },
      { id: "cangwu_repair", label: "借干栏木修轴", hint: "车轴 +6，粮草 -2", effect: { axle: 6, grain: -2, sanity: 0 }, result: "云螭氏拆下几根旧干栏木，替你们削成轮楔。木纹里还留着熏烟味。" },
      { id: "cangwu_rest", label: "在干栏屋歇脚", hint: "神志 +8，粮草 -2", effect: { axle: 0, grain: -2, sanity: 8 }, result: "云螭氏让出一间空干栏屋。你们听着雨打屋顶，轮流睡了一觉。" },
    ]
  };
  d.events.cangwu_miasma = {
    generatedArt: false,
    title: "瘴林骨笛",
    tag: "苍梧",
    texts: {
      clear: "三短一长的骨笛声穿过瘴气。云螭氏少女说，循笛可入寨，但不可回头。",
      uneasy: "笛声停时，林子里有另一支车队在走，脚步和你们一致。",
      mad: "骨笛从你们每个人的喉咙里响出来，吹的是同一个调。"
    },
    choices: [
      { label: "循笛入寨", hint: "神志 -4，得文鳐水痕", effect: { axle: 0, grain: 0, sanity: -4, flag: "wenao_trace" }, result: "你们循笛声绕过瘴气最浓的河谷。少女在寨门等你们，说笛声不是她吹的。" },
      { label: "采药换粮", hint: "粮草 +8，神志 -3", effect: { axle: 0, grain: 8, sanity: -3 }, result: "你们在瘴边采了几束药草，换给寨外的药贩。药草离土后仍带着潮气。" },
      { label: "退上风处", hint: "粮草 -3，神志 +4", effect: { axle: 0, grain: -3, sanity: 4, badLuck: -2 }, result: "车队退到上风处等瘴气散。多耗半日，人人神志清明。" }
    ]
  };
  d.routes.push(
    { id: "shaxu_to_cangwu", from: "shaxu", to: "cangwu", name: "出沙墟入苍梧", terrain: "water", risk: "高", cost: { axle: -5, grain: -3, sanity: -5 }, midEvent: "ming_snake_crosswind", midEventPool: ["ming_snake_crosswind", "wheel_omen", "black_cloud"], hint: "沙路尽头接雨林水路，瘴气只认骨笛。" },
    { id: "cangwu_to_stele", from: "cangwu", to: "broken_stele", name: "穿瘴抵断碑", terrain: "water", risk: "中", cost: { axle: -6, grain: -7, sanity: -7 }, hint: "云螭氏指了一条上风路，尽头是巫咸断碑。" }
  );
  if (d.revealPlan.shaxu) d.revealPlan.shaxu.routes.push("shaxu_to_cangwu");
  d.revealPlan.cangwu = {
    routes: ["cangwu_to_stele"],
    fogLocations: ["broken_stele"],
    fogRoutes: ["stele_to_dream"],
    revealText: "瘴气散开一线，断碑在雨林尽头露出半截。",
    revealTextShort: "瘴散碑现"
  };
  d.stageAssets.eventIllustrations.cangwu_miasma = "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png";
  d.stageAssets.locationIllustrations.cangwu = "../../02_设计资产/AI生成_2026-10-18/v2/cangwu-region-v2.png";
  d.poetryContent.sceneVerses.locations.cangwu = {
    line: "岭树重遮千里目，江流曲似九回肠。",
    title: "登柳州城楼寄漳汀封连四州",
    author: "柳宗元",
    fit: "苍梧以雨林、瘴气与骨笛把官道折成水路。"
  };
  d.poetryContent.sceneVerses.events.cangwu_miasma = {
    line: "瘴江南去入云烟，望尽黄茆是海边。",
    title: "岭南江行",
    author: "柳宗元",
    fit: "苍梧瘴气用骨笛把方向变成赌注。"
  };
  d.poetryContent.sceneVerses.routes.shaxu_to_cangwu = {
    line: "瘴江南去入云烟，望尽黄茆是海边。",
    title: "岭南江行",
    author: "柳宗元",
    fit: "沙墟尽头接雨林，瘴气只认骨笛。"
  };
  d.poetryContent.sceneVerses.routes.cangwu_to_stele = {
    line: "岭树重遮千里目，江流曲似九回肠。",
    title: "登柳州城楼寄漳汀封连四州",
    author: "柳宗元",
    fit: "上风路绕过瘴气，尽头是断碑。"
  };
})(window.BSI_GAME_DATA);

// Chapter 3 node: Wanqiu coast. Appended after Cangwu.
(function (d) {
  d.locations.wanqiu = {
    id: "wanqiu",
    name: "万丘海",
    region: "东境海岸",
    terrain: "water",
    event: "wanqiu_tide",
    generatedArt: false,
    map: { x: 10, y: 26, step: 4 },
    arrivalText: "潮声压在礁石后面，蓝火在夜浪里一亮一灭。",
    detail: "万丘海礁石密布，潮汐凶猛，入夜可见蓝火。潮生族以流灯祭海神，采珠人腰系石坠下礁缝。朝廷与海外商队在此交汇，珠税与盐引都从浪里来。",
    sanityDetails: {
      uneasy: "潮声里夹着铃声，像采珠人腰上的石坠在响。你们分不清是近是远。",
      mad: "蓝火从浪里烧到岸上，火里站着一排湿透的采珠人。"
    },
    supplyDiscoveryText: "礁洞里有潮生族留下的烤鱼与旧轴箍。",
    fieldNote: {
      category: "异闻",
      subject: "流灯祭与采珠",
      evidence: "潮生族以流灯祭海神，采珠人腰系石坠下礁缝。",
      clue: "万丘海的路要看潮，退潮时才露礁缝。",
      effect: { axle: 0, grain: 1, sanity: -1 }
    },
    supplies: [
      { id: "wanqiu_fish", label: "取烤鱼干", hint: "粮草 +6，车轴 -2", effect: { axle: -2, grain: 6, sanity: 0 }, result: "你们取走礁洞里的烤鱼干，硬得像木片，嚼开却有海盐味。" },
      { id: "wanqiu_repair", label: "换船用轴箍", hint: "车轴 +6，粮草 -2", effect: { axle: 6, grain: -2, sanity: 0 }, result: "潮生族用旧船箍替你们修轴。铁上全是盐霜，咬合却很稳。" },
      { id: "wanqiu_rest", label: "在海蚀棚歇脚", hint: "神志 +8，粮草 -2", effect: { axle: 0, grain: -2, sanity: 8 }, result: "渔家腾出半间海蚀棚。潮声整夜不退，你们却睡沉了。" },
    ]
  };
  d.events.wanqiu_tide = {
    generatedArt: false,
    title: "蓝火礁潮",
    tag: "万丘海",
    texts: {
      clear: "潮生族的潮伯说，退潮时礁缝只够一辆车通过。蓝火亮起前必须回来。",
      uneasy: "潮伯不收钱，只问你们敢不敢在蓝火亮起前回来。",
      mad: "礁石上全是搁浅的船，船里坐着和你们一样等潮的人。"
    },
    choices: [
      { label: "候潮过礁", hint: "粮草 -2，车轴 +6", effect: { axle: 6, grain: -2, sanity: 0 }, result: "你们等潮退到最低，沿潮伯指的礁缝过去。车轮没有沾水，轴却像被盐洗过。" },
      { label: "趁蓝火采珠", hint: "粮草 +7，神志 -4", effect: { axle: 0, grain: 7, sanity: -4 }, result: "蓝火亮起时，你们从礁缝里摸出几枚旧珠。潮伯背过身，没有看。" },
      { label: "退岸等下次潮", hint: "粮草 -3，神志 +3", effect: { axle: 0, grain: -3, sanity: 3 }, result: "你们退回岸上等下一次潮。多耗一日，却避开了最急的暗流。" }
    ]
  };
  d.routes.push(
    { id: "cangwu_to_wanqiu", from: "cangwu", to: "wanqiu", name: "沿海南下万丘", terrain: "water", risk: "高", cost: { axle: -5, grain: -3, sanity: -5 }, midEvent: "wenao_fish_rain", midEventPool: ["wenao_fish_rain", "mirror_reed_bed", "black_cloud"], hint: "雨林尽头接海岸，潮汐压着礁缝。" },
    { id: "wanqiu_to_stele", from: "wanqiu", to: "broken_stele", name: "候潮抵断碑", terrain: "water", risk: "中", cost: { axle: -6, grain: -7, sanity: -7 }, hint: "潮生族指了一条退潮路，尽头是断碑。" }
  );
  if (d.revealPlan.cangwu) d.revealPlan.cangwu.routes.push("cangwu_to_wanqiu");
  d.revealPlan.wanqiu = {
    routes: ["wanqiu_to_stele"],
    fogLocations: ["broken_stele"],
    fogRoutes: ["stele_to_dream"],
    revealText: "退潮后礁缝露出来，断碑在海岸尽头立着。",
    revealTextShort: "潮退碑现"
  };
  d.stageAssets.eventIllustrations.wanqiu_tide = "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png";
  d.stageAssets.locationIllustrations.wanqiu = "../../02_设计资产/AI生成_2026-10-18/v2/wanqiu-region-v2.png";
  d.poetryContent.sceneVerses.locations.wanqiu = {
    line: "潮平两岸阔，风正一帆悬。",
    title: "次北固山下",
    author: "王湾",
    fit: "万丘海只在退潮时给一辆车让出礁缝。"
  };
  d.poetryContent.sceneVerses.events.wanqiu_tide = {
    line: "海上生明月，天涯共此时。",
    title: "望月怀远",
    author: "张九龄",
    fit: "流灯祭把一年祈愿交给潮水。"
  };
  d.poetryContent.sceneVerses.routes.cangwu_to_wanqiu = {
    line: "海内存知己，天涯若比邻。",
    title: "送杜少府之任蜀州",
    author: "王勃",
    fit: "雨林尽头接海岸，潮声替车队报路。"
  };
  d.poetryContent.sceneVerses.routes.wanqiu_to_stele = {
    line: "潮平两岸阔，风正一帆悬。",
    title: "次北固山下",
    author: "王湾",
    fit: "退潮礁缝只容一车，尽头是断碑。"
  };
})(window.BSI_GAME_DATA);

// Chapter 4 node: Chixiao volcano. Appended after Wanqiu.
(function (d) {
  d.locations.chixiao = {
    id: "chixiao",
    name: "赤霄谷",
    region: "北境火山",
    terrain: "rift",
    event: "chixiao_forge",
    generatedArt: false,
    map: { x: 30, y: 26, step: 4 },
    arrivalText: "山口的硫磺味先到，琉璃石柱在热浪里发红。",
    detail: "赤霄谷熔岩暗流，硫磺熏人，谷口立着琉璃石柱。火正氏以淬火祭山，匠人面具下不说话，只认铁与粮。朝廷北疆武备的旧轴、断刃都送到这里回火。",
    sanityDetails: {
      uneasy: "石柱在热浪里发出细响，像有人用指甲敲铁。你们分不清是风还是匠人。",
      mad: "每根石柱里都封着一段车轴，轴转起来，你们的车轮也跟着转。"
    },
    supplyDiscoveryText: "匠铺后堆着淬火废料与半袋粟，火正氏没有收走。",
    fieldNote: {
      category: "异闻",
      subject: "淬火祭与琉璃柱",
      evidence: "火正氏以琉璃石柱淬轴，入谷者须留铁或留粮。",
      clue: "赤霄谷的匠人认铁不认人，车轴能在这里回火。",
      effect: { axle: 1, grain: -1, sanity: 0 }
    },
    supplies: [
      { id: "chixiao_glass", label: "捡碎琉璃换粮", hint: "粮草 +5，车轴 -2", effect: { axle: -2, grain: 5, sanity: 0 }, result: "你们在谷口捡了几块碎琉璃，换给行商。琉璃里还带着热气。" },
      { id: "chixiao_quench", label: "请匠人淬轴", hint: "车轴 +7，粮草 -3", effect: { axle: 7, grain: -3, sanity: 0 }, result: "匠人收粮，把车轴浸进石柱冷泉。轴色变深，响声也沉了。" },
      { id: "chixiao_rest", label: "就炉火歇脚", hint: "神志 +8，粮草 -2", effect: { axle: 0, grain: -2, sanity: 8 }, result: "冶坊的炉火一夜不熄。你们靠着废渣墙睡下，梦里全是锤声。" },
    ]
  };
  d.events.chixiao_forge = {
    generatedArt: false,
    title: "琉璃淬火",
    tag: "赤霄谷",
    texts: {
      clear: "火正氏匠人说，赤霄谷的琉璃石柱能淬轴，但入谷的人要留一件东西。",
      uneasy: "匠人面具下没有呼吸声。他手里的铁钳还夹着一段没冷透的车轴。",
      mad: "石柱在敲自己。每响一次，你们的车轮就热一分。"
    },
    choices: [
      { label: "以粮换淬火", hint: "粮草 -4，车轴 +8", effect: { axle: 8, grain: -4, sanity: 0 }, result: "匠人收粮，把车轴浸进琉璃石柱的冷泉。轴色变深，响声也沉了。" },
      { label: "入谷取琉璃", hint: "粮草 +6，神志 -4", effect: { axle: 0, grain: 6, sanity: -4 }, result: "你们趁匠人不备，从谷口捡了几块碎琉璃。回头时，匠人还站在原地，没有追。" },
      { label: "绕谷而行", hint: "粮草 -3，神志 +3", effect: { axle: 0, grain: -3, sanity: 3 }, result: "车队绕开赤霄谷。硫磺味淡下去时，车轮也不再发烫。" }
    ]
  };
  d.routes.push(
    { id: "wanqiu_to_chixiao", from: "wanqiu", to: "chixiao", name: "沿海入火山", terrain: "rift", risk: "高", cost: { axle: -6, grain: -3, sanity: -5 }, midEvent: "xuan_gui_shell_bridge", midEventPool: ["xuan_gui_shell_bridge", "black_cloud", "mirror_reed_bed"], hint: "海岸尽头转北，硫磺味先于山影到达。" },
    { id: "chixiao_to_stele", from: "chixiao", to: "broken_stele", name: "绕火山抵断碑", terrain: "rift", risk: "高", cost: { axle: -7, grain: -7, sanity: -7 }, hint: "匠人指了一条绕谷路，尽头是巫咸断碑。" }
  );
  if (d.revealPlan.wanqiu) d.revealPlan.wanqiu.routes.push("wanqiu_to_chixiao");
  d.revealPlan.chixiao = {
    routes: ["chixiao_to_stele"],
    fogLocations: ["broken_stele"],
    fogRoutes: ["stele_to_dream"],
    revealText: "绕谷路从硫磺雾里露出来，断碑在远处立着。",
    revealTextShort: "绕谷见碑"
  };
  d.stageAssets.eventIllustrations.chixiao_forge = "../../02_设计资产/可用素材/背景长图/BG-004_裂山荒泽废墟.png";
  d.stageAssets.locationIllustrations.chixiao = "../../02_设计资产/AI生成_2026-10-18/v2/chixiao-region-v2.png";
  d.poetryContent.sceneVerses.locations.chixiao = {
    line: "火山五月行人少，看君马去疾如鸟。",
    title: "武威送刘判官赴碛西行军",
    author: "岑参",
    fit: "赤霄谷用淬火与琉璃把车轴变成消耗品。"
  };
  d.poetryContent.sceneVerses.events.chixiao_forge = {
    line: "炉火照天地，红星乱紫烟。",
    title: "秋浦歌",
    author: "李白",
    fit: "淬火祭以粮与铁换车轴回火。"
  };
  d.poetryContent.sceneVerses.routes.wanqiu_to_chixiao = {
    line: "赤焰烧虏云，炎氛蒸塞空。",
    title: "经火山",
    author: "岑参",
    fit: "海岸转北，硫磺味先于山影到达。"
  };
  d.poetryContent.sceneVerses.routes.chixiao_to_stele = {
    line: "火山五月行人少，看君马去疾如鸟。",
    title: "武威送刘判官赴碛西行军",
    author: "岑参",
    fit: "绕谷路穿过硫磺雾，尽头是断碑。"
  };
})(window.BSI_GAME_DATA);

// Chapter 5 node: Cuiyou forest. Appended after Chixiao.
(function (d) {
  d.locations.cuiyou = {
    id: "cuiyou",
    name: "翠幽檀",
    region: "西境密林",
    terrain: "water",
    event: "cuiyou_fungus",
    generatedArt: false,
    map: { x: 50, y: 26, step: 4 },
    arrivalText: "林冠把天光滤成绿色，菌田在树根间泛着蓝光。",
    detail: "翠幽檀幽暗密林，荧光菌田沿树根铺开，青木氏以树皮刻字记事，祭槐礼时全族闭林。韩党在此伐木强征，烧过的族地只剩黑桩与菌丝。",
    sanityDetails: {
      uneasy: "菌田的蓝光跟着脚步移动，像有人举灯在前面引路。树皮上的字被刀刮过，仍留着笔锋。",
      mad: "每棵树的树皮都在动，刻的是你们这一路的名字。菌丝从字缝里长出来。"
    },
    supplyDiscoveryText: "青木氏在树洞里留了菌干与一捆修车木。",
    fieldNote: {
      category: "地风",
      subject: "菌田与祭槐礼",
      evidence: "青木氏以树皮刻字，祭槐礼时闭林，菌田可食。",
      clue: "翠幽檀的菌田能指水，但头茬菌不可采。",
      effect: { axle: 0, grain: 1, sanity: -1 }
    },
    supplies: [
      { id: "cuiyou_fungus", label: "换一袋菌干", hint: "粮草 +6，车轴 -2", effect: { axle: -2, grain: 6, sanity: 0 }, result: "你们用旧铁换了一袋菌干。菌干轻得像纸，煮开却能顶一顿饭。" },
      { id: "cuiyou_repair", label: "取修车木", hint: "车轴 +6，粮草 -2", effect: { axle: 6, grain: -2, sanity: 0 }, result: "青木氏从倒木上劈下几块硬木，替你们补了轮楔。" },
      { id: "cuiyou_rest", label: "在香樟下歇脚", hint: "神志 +8，粮草 -2", effect: { axle: 0, grain: -2, sanity: 8 }, result: "檀香把瘴气压在树外。你们在香樟根旁睡了一觉，醒来舌底发甜。" },
    ]
  };
  d.events.cuiyou_fungus = {
    generatedArt: false,
    title: "菌田蓝光",
    tag: "翠幽檀",
    texts: {
      clear: "林中菌田泛蓝光，青木氏说循光可找到水，但不可采头一茬。",
      uneasy: "蓝光跟着你们的脚步移动，像有人举灯在前面引路。",
      mad: "菌田里长出一排小祠，每座祠里都坐着一名随从。"
    },
    choices: [
      { label: "循光找水", hint: "粮草 +5，神志 -2", effect: { axle: 0, grain: 5, sanity: -2 }, result: "你们循蓝光找到一眼冷泉，灌满水囊。头一茬菌菇留在原地，没有采。" },
      { label: "采头茬菌", hint: "粮草 +7，神志 -4", effect: { axle: 0, grain: 7, sanity: -4 }, result: "头茬菌菇入口极鲜。走出菌田后，队伍里没有人记得昨夜谁守夜。" },
      { label: "守祭槐礼", hint: "粮草 -3，神志 +4", effect: { axle: 0, grain: -3, sanity: 4, badLuck: -2 }, result: "你们在槐树下闭林守礼。礼毕，青木氏指了一条不烧族地的旧路。" }
    ]
  };
  d.routes.push(
    { id: "chixiao_to_cuiyou", from: "chixiao", to: "cuiyou", name: "下山入翠幽", terrain: "water", risk: "高", cost: { axle: -5, grain: -3, sanity: -5 }, midEvent: "bone_ox_rut", midEventPool: ["bone_ox_rut", "wheel_omen", "black_cloud"], hint: "火山背坡接密林，菌田蓝光在树根间。" },
    { id: "cuiyou_to_stele", from: "cuiyou", to: "broken_stele", name: "穿林抵断碑", terrain: "water", risk: "高", cost: { axle: -6, grain: -7, sanity: -7 }, hint: "青木氏指了一条祭槐旧路，尽头是断碑。" }
  );
  if (d.revealPlan.chixiao) d.revealPlan.chixiao.routes.push("chixiao_to_cuiyou");
  d.revealPlan.cuiyou = {
    routes: ["cuiyou_to_stele"],
    fogLocations: ["broken_stele"],
    fogRoutes: ["stele_to_dream"],
    revealText: "菌田蓝光暗下去，断碑在密林尽头露出半截。",
    revealTextShort: "林尽碑现"
  };
  d.stageAssets.eventIllustrations.cuiyou_fungus = "../../02_设计资产/可用素材/背景长图/BG-009_赤水泽畔中景地貌.png";
  d.stageAssets.locationIllustrations.cuiyou = "../../02_设计资产/AI生成_2026-10-18/v2/cuiyou-region-v2.png";
  d.poetryContent.sceneVerses.locations.cuiyou = {
    line: "空山不见人，但闻人语响。",
    title: "鹿柴",
    author: "王维",
    fit: "翠幽檀的菌田用蓝光指水，林子替人说话。"
  };
  d.poetryContent.sceneVerses.events.cuiyou_fungus = {
    line: "返景入深林，复照青苔上。",
    title: "鹿柴",
    author: "王维",
    fit: "菌田蓝光与祭槐礼把密林变成一次守约。"
  };
  d.poetryContent.sceneVerses.routes.chixiao_to_cuiyou = {
    line: "绿树村边合，青山郭外斜。",
    title: "过故人庄",
    author: "孟浩然",
    fit: "火山背坡转密林，菌田在树根间发亮。"
  };
  d.poetryContent.sceneVerses.routes.cuiyou_to_stele = {
    line: "空山不见人，但闻人语响。",
    title: "鹿柴",
    author: "王维",
    fit: "祭槐旧路穿过密林，尽头是断碑。"
  };
})(window.BSI_GAME_DATA);

// Chapter 6 node: Luochen ruins. Appended after Cuiyou.
(function (d) {
  d.locations.luochen = {
    id: "luochen",
    name: "洛尘古国",
    region: "荒原故墟",
    terrain: "rift",
    event: "luochen_tile",
    generatedArt: false,
    map: { x: 90, y: 26, step: 4 },
    arrivalText: "风蚀石柱排到天边，古井边没有脚印，只有一层新沙。",
    detail: "洛尘故墟在帝国版图之外，废墟、风蚀石柱、古井与无人定居的街巷。行商有禁忌：入墟投钱，出墟不回头。瓦当、井水与残碑都像在等一个早已写好的名字。",
    sanityDetails: {
      uneasy: "石柱的影子朝同一个方向倒，太阳却不在那边。井水很清，清得能看见你们没走过的路。",
      mad: "废墟里有人念你们的行旅日数，念到今日，声音停了。"
    },
    supplyDiscoveryText: "井边石台压着半袋干粮与一枚无字瓦当。",
    fieldNote: {
      category: "地风",
      subject: "瓦当与过路礼",
      evidence: "洛尘入墟须投钱，出墟不可回头；瓦当上常见风宪旧字。",
      clue: "洛尘故墟的井水与瓦当都指向同一段被抹掉的官路。",
      effect: { axle: 0, grain: 1, sanity: -1 }
    },
    supplies: [
      { id: "luochen_water", label: "取古井水", hint: "粮草 +6，神志 -2", effect: { axle: 0, grain: 6, sanity: -2 }, result: "你们打上一囊井水，水色清亮。喝下去时，舌尖有一点铁锈味。" },
      { id: "luochen_brick", label: "拾瓦当换粮", hint: "粮草 +5，车轴 -2", effect: { axle: -2, grain: 5, sanity: 0 }, result: "你们拾了几块完整瓦当，换给荒原行商。瓦当背面有风宪旧印。" },
      { id: "luochen_rest", label: "在废宅歇脚", hint: "神志 +8，粮草 -2", effect: { axle: 0, grain: -2, sanity: 8 }, result: "你们挑了一间没有倒塌的废宅。风穿过空窗，像有人在隔壁翻纸。" },
    ]
  };
  d.events.luochen_tile = {
    generatedArt: false,
    title: "洛尘瓦当",
    tag: "洛尘古国",
    texts: {
      clear: "荒原上遇一个从洛尘回来的行脚人。他说进废墟要投钱，出废墟不能回头。",
      uneasy: "行脚人已经投过钱，袋里却还有一枚同样的铜钱。",
      mad: "他问你们：如果瓦当上刻着你们的名字，还算不算拾取？"
    },
    choices: [
      { label: "依礼过墟", hint: "神志 +4，粮草 -1", effect: { axle: 0, grain: -1, sanity: 4, badLuck: -2 }, result: "你们在井边石台放下一枚铜钱，出墟时没有回头。风沙没有追来。" },
      { label: "拾一块瓦当", hint: "神志 -5，得裂隙名", effect: { axle: 0, grain: 0, sanity: -5, flag: "rift_name" }, result: "瓦当上刻着一行小字，正是你们这一路走过的地名。你们把它收进车箱。" },
      { label: "不进废墟", hint: "车轴 -2，粮草 +3", effect: { axle: -2, grain: 3, sanity: 0 }, result: "你们绕开洛尘故墟，在荒原边缘捡到几袋遗落的干粮。废墟在身后一直很安静。" }
    ]
  };
  d.routes.push(
    { id: "cuiyou_to_luochen", from: "cuiyou", to: "luochen", name: "出林入洛尘", terrain: "rift", risk: "高", cost: { axle: -6, grain: -4, sanity: -6 }, midEvent: "dream_cicada_shell", midEventPool: ["dream_cicada_shell", "fox_lamp_tail", "roadside_shrine"], hint: "密林尽头是荒原，风蚀石柱排到天边。" },
    { id: "luochen_to_rift", from: "luochen", to: "kyushu_rift", name: "过故墟抵裂隙", terrain: "rift", risk: "高", cost: { axle: -7, grain: -4, sanity: -7 }, midEvent: "zhu_bird_name_call", midEventPool: ["zhu_bird_name_call", "fox_lamp_tail", "dream_cicada_shell"], hint: "出墟不回头，裂隙就在荒原尽头。" }
  );
  if (d.revealPlan.cuiyou) d.revealPlan.cuiyou.routes.push("cuiyou_to_luochen");
  d.revealPlan.luochen = {
    routes: ["luochen_to_rift"],
    fogLocations: ["kyushu_rift"],
    fogRoutes: ["dream_to_rift"],
    revealText: "石柱尽头露出裂隙的暗光，荒原在这里断了。",
    revealTextShort: "墟尽裂现"
  };
  d.stageAssets.eventIllustrations.luochen_tile = "../../02_设计资产/可用素材/背景长图/BG-003_中景荒原石碑.png";
  d.stageAssets.locationIllustrations.luochen = "../../02_设计资产/AI生成_2026-10-18/luochen-region.png";
  d.poetryContent.sceneVerses.locations.luochen = {
    line: "宫阙万间都做了土。",
    title: "山坡羊·潼关怀古",
    author: "张养浩",
    fit: "洛尘古国只剩废墟、古井与无人认领的瓦当。"
  };
  d.poetryContent.sceneVerses.events.luochen_tile = {
    line: "折戟沉沙铁未销，自将磨洗认前朝。",
    title: "赤壁",
    author: "杜牧",
    fit: "瓦当上的旧字把过路者写成前朝遗物。"
  };
  d.poetryContent.sceneVerses.routes.cuiyou_to_luochen = {
    line: "西风残照，汉家陵阙。",
    title: "忆秦娥",
    author: "李白",
    fit: "密林尽头是荒原，石柱像旧朝的陵阙。"
  };
  d.poetryContent.sceneVerses.routes.luochen_to_rift = {
    line: "宫阙万间都做了土。",
    title: "山坡羊·潼关怀古",
    author: "张养浩",
    fit: "出墟不回头，裂隙在荒原尽头。"
  };
})(window.BSI_GAME_DATA);

// Chapter 2 optional shortcut: the rift name learned at the stele opens a
// locked road into the ruined capital, skipping Cuiyou. Appended so the main
// literal and earlier patches stay untouched.
(function (d) {
  d.routes.push({
    id: "stele_to_luochen",
    from: "broken_stele",
    to: "luochen",
    name: "循残名入废都",
    terrain: "road",
    risk: "高",
    cost: { axle: -9, grain: -7, sanity: -8 },
    hint: "碑上残名指向废都；不识古辞者看不见这条路。",
    requireAny: [
      { flag: "rift_name" },
      { languageMin: { key: "wuxian", value: 20 } }
    ],
    lockedHint: "需在断碑读出裂隙名，或巫咸古辞 ≥20。",
    lockedHintShort: "还缺残名或古辞"
  });
  d.revealPlan.broken_stele.routes.push("stele_to_luochen");
  d.routePools.broken_stele.requiredRoutes.push("stele_to_luochen");
  d.poetryContent.sceneVerses.routes.stele_to_luochen = {
    line: "国破山河在，城春草木深。",
    title: "春望",
    author: "杜甫",
    fit: "断碑残名指向废都，城中草木比人更长寿。"
  };
})(window.BSI_GAME_DATA);

// Transition node between Shaxu and Cangwu: the Qinling plank road. Appended
// last so the earlier chain definitions can be redirected without touching
// the main literal.
(function (d) {
  d.locations.qinling = {
    id: "qinling",
    name: "秦岭",
    region: "关中界山",
    terrain: "road",
    event: "qinling_pass",
    generatedArt: false,
    map: { x: 8, y: 42, step: 3 },
    arrivalText: "山脊把官道折成栈道，木板下是看不见底的雾。",
    detail: "秦岭横在关中与南疆之间，旧栈道沿崖壁凿孔架木。背夫按里程换盐，山神按风声收路。朝廷的驿传在这里换马，也在这里丢弃走不动的车。",
    sanityDetails: {
      uneasy: "雾从木板缝里升上来，脚下的空响比风声更近。",
      mad: "栈道开始往回头延伸，每走一步，来路就少一截。"
    },
    supplyDiscoveryText: "崖窝里堆着背夫留下的野果与旧栈木。",
    fieldNote: {
      category: "地风",
      subject: "栈道与背夫",
      evidence: "秦岭栈道沿崖架木，背夫按里程换盐。",
      clue: "栈道只容一车，遇雾须贴崖慢行。",
      effect: { axle: 0, grain: -1, sanity: 1 }
    },
    supplies: [
      { id: "qinling_fruit", label: "采崖边野果", hint: "粮草 +6，神志 -1", effect: { axle: 0, grain: 6, sanity: -1 }, result: "你们摘了半袋酸果。背夫说这东西顶饿，但吃多了舌头发麻。" },
      { id: "qinling_plank", label: "换旧栈木修轴", hint: "车轴 +6，粮草 -2", effect: { axle: 6, grain: -2, sanity: 0 }, result: "背夫拆下一块换下来的栈木，替你们削成轮楔。木头里还嵌着旧钉。" }
    ]
  };
  d.events.qinling_pass = {
    generatedArt: false,
    title: "秦岭栈道",
    tag: "秦岭",
    texts: {
      clear: "栈道只容一车。背夫说，雾起之前必须过崖，否则要在山上多冻一夜。",
      uneasy: "雾里有人替你们数车轮，数到第三下就停。背夫说那是山神在挑车。",
      mad: "栈道下面还有一条栈道，另一支车队正抬着头看你们。"
    },
    choices: [
      { label: "趁雾未起过崖", hint: "粮草 -3，神志 -2", effect: { axle: 0, grain: -3, sanity: -2 }, result: "你们贴着崖壁把车推过最窄的一段。雾在车尾合拢，没有追上来。" },
      { label: "在崖窝避风", hint: "粮草 -2，神志 +4", effect: { axle: 0, grain: -2, sanity: 4 }, result: "你们在崖窝里等到风停。背夫分了半碗热水，说山神今天不收车。" },
      { label: "帮背夫推盐车", hint: "车轴 +4，神志 -2", effect: { axle: 4, grain: 0, sanity: -2 }, result: "你们帮背夫把盐车推上坡。他卸下一根备用的轴木，塞进你们车底。" }
    ]
  };
  d.routes = d.routes.filter((route) => route.id !== "shaxu_to_cangwu");
  d.routes.push(
    { id: "shaxu_to_qinling", from: "shaxu", to: "qinling", name: "出沙墟入秦岭", terrain: "road", risk: "高", cost: { axle: -4, grain: -3, sanity: -4 }, midEvent: "ming_snake_crosswind", midEventPool: ["ming_snake_crosswind", "wheel_omen", "black_cloud"], hint: "沙路尽头接栈道，雾里只容一车。" },
    { id: "qinling_to_cangwu", from: "qinling", to: "cangwu", name: "下秦岭入苍梧", terrain: "water", risk: "高", cost: { axle: -4, grain: -2, sanity: -3 }, hint: "栈道下完是雨林水路，瘴气只认骨笛。" }
  );
  if (d.revealPlan.shaxu) {
    d.revealPlan.shaxu.routes = d.revealPlan.shaxu.routes
      .filter((routeId) => routeId !== "shaxu_to_cangwu")
      .concat("shaxu_to_qinling");
  }
  d.revealPlan.qinling = {
    routes: ["qinling_to_cangwu"],
    fogLocations: ["cangwu"],
    revealText: "栈道尽头是雨林水路，瘴气从谷底翻上来。",
    revealTextShort: "栈尽瘴起"
  };
  d.stageAssets.locationIllustrations.qinling = "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png";
  d.stageAssets.eventIllustrations.qinling_pass = "../../02_设计资产/可用素材/背景长图/BG-010_废关古道地点背景.png";
  d.poetryContent.sceneVerses.locations.qinling = {
    line: "蜀道之难，难于上青天。",
    title: "蜀道难",
    author: "李白",
    fit: "秦岭栈道只容一车，雾起即断。"
  };
  d.poetryContent.sceneVerses.events.qinling_pass = {
    line: "云横秦岭家何在？雪拥蓝关马不前。",
    title: "左迁至蓝关示侄孙湘",
    author: "韩愈",
    fit: "雾锁栈道，来路与去路都不肯先开口。"
  };
  d.locations.cangwu.map.x = 25;
  d.locations.white_feather_mire.map.x = 42;
  d.locations.feather_folk_ford.map.x = 59;
  d.locations.red_marsh.map.x = 76;
  d.locations.broken_stele.map.x = 92;
})(window.BSI_GAME_DATA);
