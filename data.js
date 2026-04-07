
/**
 * ICARUS COMPREHENSIVE ITEM DATABASE
 * Includes: Tier 1-4 Craftables, Orbital Workshop, and DLC items.
 * Categories: Pickaxes, Axes, Knives, Spears, Javelins, Bows, Crossbows, Firearms, Armor, Backpacks, Food.
 */

const ICARUS_DATA = {

  // ──────────────────────────────────────────────────────────
  //  PICKAXES (Mining)
  // ──────────────────────────────────────────────────────────
  pickaxes: {
    label: "Pickaxes",
    icon: "⛏️",
    stats: [
      { key: "tier",          label: "Tier",            unit: "",    higher: false, type: "number" },
      { key: "durability",    label: "Durability",      unit: "",    higher: true,  type: "bar",   max: 150000 },
      { key: "miningYield",   label: "Mining Yield",    unit: "%",   higher: true,  type: "bar",   max: 160 },
      { key: "miningRadius",  label: "Mining Radius",   unit: "",    higher: true,  type: "bar",   max: 100 },
      { key: "weight",        label: "Weight",          unit: " kg", higher: false, type: "number" },
    ],
    items: [
      { id: "p_stone", name: "Stone Pickaxe", tier: 1, durability: 20000, miningYield: 100, miningRadius: 50, weight: 0.5, craftedAt: "Hand", color: "#9E9E9E", special: [] },
      { id: "p_iron", name: "Iron Pickaxe", tier: 2, durability: 40000, miningYield: 125, miningRadius: 60, weight: 0.5, craftedAt: "Anvil", color: "#78909C", special: [] },
      { id: "p_steel", name: "Steel Pickaxe", tier: 3, durability: 80000, miningYield: 130, miningRadius: 65, weight: 0.5, craftedAt: "Anvil", color: "#546E7A", special: [] },
      { id: "p_platinum", name: "Platinum Pickaxe", tier: 3, durability: 120000, miningYield: 133, miningRadius: 70, weight: 1.0, craftedAt: "Machining Bench", color: "#B0BEC5", special: [] },
      { id: "p_titanium", name: "Titanium Pickaxe", tier: 4, durability: 120000, miningYield: 140, miningRadius: 75, weight: 0.5, craftedAt: "Fabricator", color: "#4DB6AC", special: [] },
      { id: "p_obsidian", name: "Obsidian Pickaxe", tier: 3, durability: 60000, miningYield: 140, miningRadius: 75, weight: 0.5, craftedAt: "Anvil", color: "#311B92", special: ["30% chance to instantly smelt ore"] },
      { id: "p_miasmic", name: "Miasmic Pickaxe", tier: 4, durability: 120000, miningYield: 140, miningRadius: 75, weight: 0.5, craftedAt: "Bio-Bench", color: "#9C27B0", special: ["+100% Noxious Crust yield", "Poison Damage"] },
      { id: "p_neves", name: "Inaris 'Neves'", tier: "W", durability: 60000, miningYield: 148, miningRadius: 60, weight: 0.5, craftedAt: "Workshop", color: "#FFD54F", special: ["-50% Over-Encumbrance Penalty", "Workshop Item"] },
      { id: "p_suishi", name: "Shengong 'Sui Shi'", tier: "W", durability: 50000, miningYield: 125, miningRadius: 60, weight: 0.5, craftedAt: "Workshop", color: "#FBC02D", special: ["+10% Gold/Copper Yield", "Workshop Item"] },
      { id: "p_ut5", name: "Shengong UT5", tier: "W", durability: 50000, miningYield: 133, miningRadius: 70, weight: 0.5, craftedAt: "Workshop", color: "#FF7043", special: ["15% chance to cause Electroshock", "Workshop Item"] },
      { id: "p_viridian", name: "Anaris 'Viridian'", tier: "W", durability: 65000, miningYield: 140, miningRadius: 65, weight: 0.5, craftedAt: "Workshop", color: "#4DB6AC", special: ["Chance to drop Frozen Ore", "Workshop Item"] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  AXES (Lumber/Combat)
  // ──────────────────────────────────────────────────────────
  axes: {
    label: "Axes",
    icon: "🪓",
    stats: [
      { key: "tier",         label: "Tier",           unit: "",    higher: false, type: "number" },
      { key: "durability",   label: "Durability",     unit: "",    higher: true,  type: "bar",   max: 160000 },
      { key: "damage",       label: "Damage",         unit: "",    higher: true,  type: "bar",   max: 80 },
      { key: "woodYield",    label: "Wood Yield",     unit: "%",   higher: true,  type: "bar",   max: 160 },
      { key: "weight",       label: "Weight",         unit: " kg", higher: false, type: "number" },
    ],
    items: [
      { id: "a_stone", name: "Stone Axe", tier: 1, durability: 12000, damage: 12, woodYield: 100, weight: 0.5, color: "#9E9E9E", special: [] },
      { id: "a_iron", name: "Iron Axe", tier: 2, durability: 30000, damage: 22, woodYield: 125, weight: 0.5, color: "#78909C", special: [] },
      { id: "a_steel", name: "Steel Axe", tier: 3, durability: 60000, damage: 32, woodYield: 130, weight: 0.5, color: "#546E7A", special: [] },
      { id: "a_platinum", name: "Platinum Axe", tier: 3, durability: 100000, damage: 42, woodYield: 135, weight: 1.0, color: "#B0BEC5", special: [] },
      { id: "a_titanium", name: "Titanium Axe", tier: 4, durability: 100000, damage: 48, woodYield: 145, weight: 0.5, color: "#4DB6AC", special: [] },
      { id: "a_larkwell", name: "Larkwell Axe", tier: "W", durability: 40000, damage: 55, woodYield: 130, weight: 0.5, color: "#FF5722", special: ["High attack speed", "Workshop Item"] },
      { id: "a_inaris", name: "Inaris 'Cenote'", tier: "W", durability: 60000, damage: 44, woodYield: 140, weight: 0.5, color: "#FFD54F", special: ["Reduced wood carry weight", "Workshop Item"] },
      { id: "a_miasmic", name: "Miasmic Axe", tier: 4, durability: 120000, damage: 50, woodYield: 140, weight: 0.5, color: "#9C27B0", special: ["+100% Infected Bark yield", "+15% Miasma on Hit"] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  KNIVES (Skinning/Combat)
  // ──────────────────────────────────────────────────────────
  knives: {
    label: "Knives",
    icon: "🔪",
    stats: [
      { key: "tier",         label: "Tier",           unit: "",    higher: false, type: "number" },
      { key: "durability",   label: "Durability",     unit: "",    higher: true,  type: "bar",   max: 80000 },
      { key: "damage",       label: "Damage",         unit: "",    higher: true,  type: "bar",   max: 60 },
      { key: "meatYield",    label: "Skinning Yield", unit: "%",   higher: true,  type: "bar",   max: 200 },
    ],
    items: [
      { id: "k_bone", name: "Bone Knife", tier: 1, durability: 8000, damage: 9, meatYield: 100, color: "#D7CCC8", special: [] },
      { id: "k_iron", name: "Iron Knife", tier: 2, durability: 25000, damage: 18, meatYield: 120, color: "#78909C", special: [] },
      { id: "k_steel", name: "Steel Knife", tier: 3, durability: 50000, damage: 26, meatYield: 130, color: "#546E7A", special: [] },
      { id: "k_titanium", name: "Titanium Knife", tier: 4, durability: 75000, damage: 38, meatYield: 145, color: "#4DB6AC", special: [] },
      { id: "k_platinum", name: "Platinum Knife", tier: 3, durability: 75000, damage: 34, meatYield: 135, color: "#B0BEC5", special: [] },
      { id: "k_qie", name: "Shengong 'Qie'", tier: "W", durability: 50000, damage: 32, meatYield: 175, color: "#FBC02D", special: ["Best Skinning Yield", "Workshop Item"] },
      { id: "k_sich", name: "Inaris 'Sich'", tier: "W", durability: 60000, damage: 35, meatYield: 140, color: "#FFD54F", special: ["Bleed Resistance while equipped", "Workshop Item"] },
      { id: "k_miasmic", name: "Miasmic Knife", tier: 4, durability: 120000, damage: 42, meatYield: 175, color: "#9C27B0", special: ["+10% Acidic Gland yield", "+15% Miasma on Hit"] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  SPEARS (Melee Only)
  // ──────────────────────────────────────────────────────────
  spears: {
    label: "Spears",
    icon: "🗡️",
    stats: [
      { key: "tier",         label: "Tier",           unit: "",    higher: false, type: "number" },
      { key: "durability",   label: "Durability",     unit: "",    higher: true,  type: "bar",   max: 100000 },
      { key: "damage",       label: "Melee Damage",   unit: "",    higher: true,  type: "bar",   max: 120 },
      { key: "critDamage",   label: "Crit Bonus",     unit: "%",   higher: true,  type: "number" },
    ],
    items: [
      { id: "s_wood", name: "Wood Spear", tier: 1, durability: 15000, damage: 45, critDamage: 10, color: "#8D6E63", special: [] },
      { id: "s_bone", name: "Bone Spear", tier: 1, durability: 18000, damage: 52, critDamage: 15, color: "#D7CCC8", special: [] },
      { id: "s_iron", name: "Iron Spear", tier: 2, durability: 35000, damage: 58, critDamage: 20, color: "#78909C", special: [] },
      { id: "s_steel", name: "Steel Spear", tier: 3, durability: 65000, damage: 62, critDamage: 25, color: "#546E7A", special: [] },
      { id: "s_platinum", name: "Platinum Spear", tier: 3, durability: 80000, damage: 72, critDamage: 25, color: "#B0BEC5", special: [] },
      { id: "s_titanium", name: "Titanium Spear", tier: 4, durability: 90000, damage: 88, critDamage: 30, color: "#4DB6AC", special: [] },
      { id: "s_composite", name: "Composite Spear", tier: 4, durability: 100000, damage: 105, critDamage: 35, color: "#FF7043", special: [] },
      { id: "s_mxc", name: "MXC Spear", tier: "W", durability: 30000, damage: 54, critDamage: 15, color: "#9E9E9E", special: ["Workshop Item"] },
      { id: "s_gongbu", name: "Shengong 'Gong Bu'", tier: "W", durability: 50000, damage: 60, critDamage: 25, color: "#FBC02D", special: ["+10% Attack Speed", "Workshop Item"] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  JAVELINS (Thrown)
  // ──────────────────────────────────────────────────────────
  javelins: {
    label: "Javelins",
    icon: "🎯",
    stats: [
      { key: "tier",         label: "Tier",           unit: "",    higher: false, type: "number" },
      { key: "projDamage",   label: "Thrown Damage",  unit: "",    higher: true,  type: "bar",   max: 250 },
      { key: "stackSize",    label: "Stack Size",     unit: "",    higher: true,  type: "number" },
    ],
    items: [
      { id: "j_wood", name: "Wood Javelin", tier: 1, projDamage: 60, stackSize: 5, color: "#8D6E63", special: [] },
      { id: "j_bone", name: "Bone Javelin", tier: 1, projDamage: 85, stackSize: 5, color: "#D7CCC8", special: [] },
      { id: "j_iron", name: "Iron Javelin", tier: 2, projDamage: 120, stackSize: 10, color: "#78909C", special: [] },
      { id: "j_steel", name: "Steel Javelin", tier: 3, projDamage: 160, stackSize: 10, color: "#546E7A", special: [] },
      { id: "j_titanium", name: "Titanium Javelin", tier: 4, projDamage: 220, stackSize: 10, color: "#4DB6AC", special: [] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  BOWS (Ranged)
  // ──────────────────────────────────────────────────────────
  bows: {
    label: "Bows",
    icon: "🏹",
    stats: [
      { key: "tier",         label: "Tier",           unit: "",    higher: false, type: "number" },
      { key: "durability",   label: "Durability",     unit: "",    higher: true,  type: "bar",   max: 60000 },
      { key: "projDamage",   label: "Proj. Damage",   unit: "%",   higher: true,  type: "bar",   max: 130 },
    ],
    items: [
      { id: "b_wood", name: "Wood Bow", tier: 1, durability: 5000, projDamage: 0, color: "#8D6E63", special: [] },
      { id: "b_longbow", name: "Longbow", tier: 2, durability: 7500, projDamage: 25, color: "#A1887F", special: [] },
      { id: "b_caveworm", name: "Caveworm Bow", tier: 2, durability: 8500, projDamage: 50, color: "#9CCC65", special: ["High early value"] },
      { id: "b_recurve", name: "Recurve Bow", tier: 3, durability: 12500, projDamage: 50, color: "#78909C", special: [] },
      { id: "b_compound", name: "Compound Bow", tier: 4, durability: 20000, projDamage: 100, color: "#FF7043", special: ["Fiberglass limbs"] },
      { id: "b_larkwell", name: "Larkwell Compound", tier: "W", durability: 40000, projDamage: 125, color: "#FF5722", special: ["Best DPS Bow", "Workshop Item"] },
      { id: "b_jijing", name: "Shengong 'Jising'", tier: "W", durability: 50000, projDamage: 75, color: "#FBC02D", special: ["Extreme Durability", "+15% Arrow Speed", "Workshop Item"] },
      { id: "b_ji", name: "Shengong 'Ji'", tier: "W", durability: 45000, projDamage: 75, color: "#FBC02D", special: ["-15% Move Speed", "-15% Charge Speed", "Workshop Item"] },
      { id: "b_zhang_hu", name: "Shengong 'Zhang Hu'", tier: "W", durability: 45000, projDamage: 75, color: "#F9A825", special: ["+15% Arrow Speed", "+10% Damage", "-15% Charge Speed", "Workshop Item"] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  CROSSBOWS (Ranged)
  // ──────────────────────────────────────────────────────────
  crossbows: {
    label: "Crossbows",
    icon: "🏹",
    stats: [
      { key: "tier",         label: "Tier",           unit: "",    higher: false, type: "number" },
      { key: "durability",   label: "Durability",     unit: "",    higher: true,  type: "bar",   max: 60000 },
      { key: "projDamage",   label: "Proj. Damage",   unit: "%",   higher: true,  type: "bar",   max: 200 },
    ],
    items: [
      { id: "xb_wood", name: "Wooden Crossbow", tier: 2, durability: 10000, projDamage: 100, color: "#8D6E63", special: ["100% Armor Penetration"] },
      { id: "xb_iron", name: "Iron Crossbow", tier: 3, durability: 20000, projDamage: 140, color: "#78909C", special: ["High impact slow"] },
      { id: "xb_inaris_h", name: "Inaris 'Heavy'", tier: "W", durability: 60000, projDamage: 180, color: "#E91E63", special: ["35% Slow chance", "Workshop Item"] },
      { id: "xb_inaris_r", name: "Inaris 'Rapid'", tier: "W", durability: 60000, projDamage: 125, color: "#EC407A", special: ["2.5s Reload time", "Workshop Item"] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  FIREARMS (End-game)
  // ──────────────────────────────────────────────────────────
  firearms: {
    label: "Firearms",
    icon: "🔫",
    stats: [
      { key: "tier",         label: "Tier",           unit: "",    higher: false, type: "number" },
      { key: "damage",       label: "Base Damage",    unit: "",    higher: true,  type: "bar",   max: 600 },
      { key: "magSize",      label: "Magazine",       unit: "",    higher: true,  type: "number" },
    ],
    items: [
      { id: "f_pistol", name: "Semi-Auto Pistol", tier: 4, damage: 180, magSize: 12, color: "#78909C", craftedAt: "Fabricator", craftCost: ["8× Steel Ingot", "4× Electronics", "2× Steel Screw"], special: ["Fast fire rate"], description: "Reliable sidearm for mid-range defense against aggressive predators." },
      { id: "f_rifle", name: "Hunting Rifle", tier: 4, damage: 450, magSize: 1, color: "#546E7A", craftedAt: "Fabricator", craftCost: ["12× Steel Ingot", "8× Electronics", "1× Scope"], special: ["Extreme range", "Piercing"], description: "The ultimate hunting tool. High damage per shot, perfect for one-shotting bears." },
      { id: "f_shotgun", name: "Shotgun", tier: 4, damage: 600, magSize: 6, color: "#455A64", craftedAt: "Fabricator", craftCost: ["10× Steel Ingot", "6× Electronics", "4× Epoxy"], special: ["High recoil", "Close range king"], description: "Devastating at close range. Each shot fires multiple pellets." }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  ARMOR SETS (Protection)
  // ──────────────────────────────────────────────────────────
  armor: {
    label: "Armor Sets",
    icon: "🛡️",
    stats: [
      { key: "tier",         label: "Tier",           unit: "",    higher: false, type: "number" },
      { key: "armor",        label: "Armor Rating",   unit: "",    higher: true,  type: "bar",   max: 120 },
      { key: "heat",         label: "Heat Resist",    unit: "%",   higher: true,  type: "number" },
      { key: "cold",         label: "Cold Resist",    unit: "%",   higher: true,  type: "number" },
    ],
    items: [
      { id: "ar_hide", name: "Hide Armor", tier: 1, armor: 18, heat: 8, cold: 20, color: "#8D6E63", setBonus: "+5% Physical Resistance", special: [] },
      { id: "ar_fur", name: "Fur Armor", tier: 1, armor: 22, heat: 4, cold: 35, color: "#BCAAA4", setBonus: "+10% Cold Resistance", special: ["Snow biome essential"] },
      { id: "ar_iron", name: "Iron Armor", tier: 1, armor: 38, heat: 12, cold: 10, color: "#78909C", setBonus: "-5% Movement Speed Penalty", special: ["Heavy"] },
      { id: "ar_steel", name: "Steel Armor", tier: 2, armor: 60, heat: 18, cold: 14, color: "#546E7A", setBonus: "-10% Damage Taken", special: [] },
      { id: "ar_composite", name: "Composite Armor", tier: 4, armor: 85, heat: 28, cold: 22, color: "#FF7043", setBonus: "+15% Physical Resistance", special: ["Lighter than steel"] },
      { id: "ar_titanium", name: "Titanium Armor", tier: 4, armor: 110, heat: 22, cold: 18, color: "#4DB6AC", setBonus: "+20% Physical Resistance", special: ["Highest physical protection"] },
      { id: "ar_miasmic", name: "Miasmic Armor", tier: 4, armor: 95, heat: 35, cold: 15, color: "#9C27B0", setBonus: "+25% Infection Resistance", special: ["Prometheus Specialty"] },
      { id: "ar_naneo", name: "Naneo Armor", tier: "W", armor: 25, heat: 15, cold: 15, color: "#ECEFF1", setBonus: "+5% Movement Speed", special: ["Workshop Item", "Lightweight"] },
      { id: "ar_cx400", name: "CX-400 Armor", tier: "W", armor: 45, heat: 20, cold: 20, color: "#CFD8DC", setBonus: "+10% Mining/Felling Yield", special: ["Workshop Item", "Resource Specialist"] },
      { id: "ar_st700", name: "ST-700 Armor", tier: "W", armor: 35, heat: 25, cold: 25, color: "#455A64", setBonus: "+20% Stealth, +5% Movement", special: ["Workshop Item", "Infiltrator"] },
      { id: "ar_tachyon", name: "LM Tachyon Armor", tier: "W", armor: 55, heat: 10, cold: 10, color: "#FF5722", setBonus: "+10% Sprint Speed, +15% Stamina", special: ["Workshop Item", "Larkwell Martinez"] },
      { id: "ar_beastmaster", name: "LM Beastmaster", tier: "W", armor: 50, heat: 15, cold: 15, color: "#795548", setBonus: "+20% Pet Health/Damage", special: ["Workshop Item", "Animal Specialist"] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  BACKPACKS (Utility)
  // ──────────────────────────────────────────────────────────
  backpacks: {
    label: "Utility Packs",
    icon: "🎒",
    stats: [
      { key: "tier",         label: "Tier",           unit: "",    higher: false, type: "number" },
      { key: "slots",        label: "Extra Slots",    unit: "",    higher: true,  type: "number" },
    ],
    items: [
      { id: "bp_leather", name: "Leather Backpack", tier: 2, slots: 6, color: "#8D6E63", craftedAt: "Crafting Bench", craftCost: ["20× Leather", "10× Fiber"], special: ["-10% Movement speed"], description: "Basic leather pack. Adds storage but the weight makes you slightly slower." },
      { id: "bp_gatherer", name: "Gatherer's Pack", tier: "W", slots: 6, color: "#FFD54F", craftedAt: "Workshop", craftCost: ["250 Ren"], special: ["-45% Ore/Wood Weight", "Workshop Item"], description: "Optimized for resource hauling. Essential for miners and lumberjacks." },
      { id: "bp_survival", name: "Survival Pack", tier: "W", slots: 8, color: "#FF7043", craftedAt: "Workshop", craftCost: ["400 Ren", "50 Exotics"], special: ["+10% Stamina Regen", "Workshop Item"], description: "Advanced orbital pack that buffs your physical endurance." }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  FOOD (Consumables)
  // ──────────────────────────────────────────────────────────
  food: {
    label: "Food",
    icon: "🍱",
    grouped: true, // Internal flag for grouping UI
    stats: [
      { key: "maxHealth",    label: "Max Health",     unit: "",    higher: true,  type: "bar",   max: 225 },
      { key: "maxStamina",   label: "Max Stamina",    unit: "",    higher: true,  type: "bar",   max: 225 },
      { key: "healthRegen",  label: "HP Regen",       unit: "%",   higher: true,  type: "bar",   max: 30 },
      { key: "staminaRegen", label: "Stamina Regen",  unit: "%",   higher: true,  type: "bar",   max: 150 },
      { key: "duration",     label: "Duration",       unit: "s",   higher: true,  type: "bar",   max: 3600 },
      { key: "spoilTime",    label: "Spoil Time",     unit: "s",   higher: true,  type: "number" },
    ],
    items: [
      // CATEGORY: MEATS & JERKY
      { id: "f_meat", name: "Cooked Meat", group: "🥩 Meats & Jerky", tier: 1, maxHealth: 40, maxStamina: 40, healthRegen: 4, staminaRegen: 0, duration: 900, spoilTime: 800, color: "#8D6E63", special: [] },
      { id: "f_prime", name: "Cooked Prime Meat", group: "🥩 Meats & Jerky", tier: 2, maxHealth: 50, maxStamina: 50, healthRegen: 5, staminaRegen: 0, duration: 1200, spoilTime: 900, color: "#6D4C41", special: ["+5% XP"] },
      { id: "f_soft", name: "Cooked Soft Meat", group: "🥩 Meats & Jerky", tier: 2, maxHealth: 25, maxStamina: 75, healthRegen: 2, staminaRegen: 10, duration: 1200, spoilTime: 900, color: "#D7CCC8", special: [] },
      { id: "f_tough", name: "Cooked Tough Meat", group: "🥩 Meats & Jerky", tier: 2, maxHealth: 75, maxStamina: 25, healthRegen: 10, staminaRegen: 0, duration: 1200, spoilTime: 900, color: "#4E342E", special: ["High health pool"] },
      { id: "f_white", name: "Cooked White Meat", group: "🥩 Meats & Jerky", tier: 2, maxHealth: 30, maxStamina: 30, healthRegen: 5, staminaRegen: 5, duration: 1200, spoilTime: 900, color: "#FFF9C4", special: ["Balanced early meat"] },
      { id: "f_gamey", name: "Cooked Gamey Meat", group: "🥩 Meats & Jerky", tier: 2, maxHealth: 35, maxStamina: 35, healthRegen: 4, staminaRegen: 4, duration: 1200, spoilTime: 900, color: "#A1887F", special: [] },
      { id: "f_fatty", name: "Cooked Fatty Meat", group: "🥩 Meats & Jerky", tier: 2, maxHealth: 60, maxStamina: 10, healthRegen: 8, staminaRegen: 0, duration: 900, spoilTime: 800, color: "#FFCCBC", special: ["High health regen"] },
      { id: "f_jerky", name: "Dried Meat (Jerky)", group: "🥩 Meats & Jerky", tier: 2, maxHealth: 40, maxStamina: 20, healthRegen: 6, staminaRegen: 0, duration: 900, spoilTime: 7200, color: "#5D4037", special: ["Long spoil time"] },
      { id: "f_prime_jerky", name: "Dried Prime Meat", group: "🥩 Meats & Jerky", tier: 3, maxHealth: 50, maxStamina: 30, healthRegen: 8, staminaRegen: 0, duration: 1200, spoilTime: 7200, color: "#3E2723", special: ["High nutrition jerky"] },
      { id: "f_smxc", name: "MXC Smoked Meat", group: "🥩 Meats & Jerky", tier: "W", maxHealth: 60, maxStamina: 60, healthRegen: 10, staminaRegen: 5, duration: 1200, spoilTime: 14400, color: "#FFAB91", special: ["Workshop Item", "Extreme spoil time"] },

      // CATEGORY: PIES & ROLLS
      { id: "f_meat_pie", name: "Meat Pie", group: "🍰 Pies & Rolls", tier: 3, maxHealth: 125, maxStamina: 50, healthRegen: 15, staminaRegen: 0, duration: 1800, spoilTime: 3600, color: "#795548", special: ["Great health boost"] },
      { id: "f_shep_pie", name: "Shepherd's Pie", group: "🍰 Pies & Rolls", tier: 4, maxHealth: 150, maxStamina: 50, healthRegen: 15, staminaRegen: 0, duration: 1800, spoilTime: 3600, color: "#5D4037", special: ["Maximum health gain"] },
      { id: "f_veg_pie", name: "Vegetable Pie", group: "🍰 Pies & Rolls", tier: 3, maxHealth: 50, maxStamina: 150, healthRegen: 0, staminaRegen: 15, duration: 1800, spoilTime: 3600, color: "#81C784", special: ["Maximum stamina gain"] },
      { id: "f_fish_pie", name: "Fish Fillet Pie", group: "🍰 Pies & Rolls", tier: 3, maxHealth: 100, maxStamina: 75, healthRegen: 10, staminaRegen: 10, duration: 1800, spoilTime: 3600, color: "#4FC3F7", special: ["Balanced pie stats"] },
      { id: "f_fruit_pie", name: "Fruit Pie", group: "🍰 Pies & Rolls", tier: 3, maxHealth: 25, maxStamina: 125, healthRegen: 5, staminaRegen: 20, duration: 1800, spoilTime: 3600, color: "#F06292", special: ["High stamina pie"] },
      { id: "f_savory_roll", name: "Savory Roll", group: "🍰 Pies & Rolls", tier: 4, maxHealth: 125, maxStamina: 125, healthRegen: 10, staminaRegen: 10, duration: 1800, spoilTime: 3600, color: "#A1887F", special: ["Ultimate balanced meal"] },
      { id: "f_fruit_roll", name: "Fruit Roll", group: "🍰 Pies & Rolls", dlc: "P", tier: 4, maxHealth: 25, maxStamina: 175, healthRegen: 0, staminaRegen: 25, duration: 1800, spoilTime: 3600, color: "#F06292", special: ["Prometheus Specialty", "Top stamina"] },
      { id: "f_shep_roll", name: "Shepherd's Roll", group: "🍰 Pies & Rolls", dlc: "P", tier: 4, maxHealth: 150, maxStamina: 75, healthRegen: 12, staminaRegen: 5, duration: 1800, spoilTime: 3600, color: "#795548", special: ["Prometheus elite health"] },

      // CATEGORY: STEWS & SOUPS
      { id: "f_fish_curry", name: "Fish Curry", group: "🥣 Stews & Soups", tier: 3, maxHealth: 75, maxStamina: 75, healthRegen: 20, staminaRegen: 20, duration: 1800, spoilTime: 3600, color: "#FFD54F", special: ["Balanced HP/Stam", "+20% Poison Resist"] },
      { id: "f_mush_soup", name: "Mushroom Soup", group: "🥣 Stews & Soups", dlc: "P", tier: 3, maxHealth: 100, maxStamina: 50, healthRegen: 10, staminaRegen: 10, duration: 1800, spoilTime: 3600, color: "#9575CD", special: ["Prometheus Specialty"] },
      { id: "f_rhubarb_stew", name: "Rhubarb Stew", group: "🥣 Stews & Soups", dlc: "P", tier: 3, maxHealth: 40, maxStamina: 120, healthRegen: 0, staminaRegen: 30, duration: 1500, spoilTime: 1800, color: "#EF5350", special: ["Prometheus Specialty"] },
      { id: "f_sweet_soup", name: "Sweetcorn Soup", group: "🥣 Stews & Soups", tier: 2, maxHealth: 25, maxStamina: 75, healthRegen: 0, staminaRegen: 15, duration: 900, spoilTime: 1200, color: "#FFF176", special: ["Easy early soup"] },
      { id: "f_car_soup", name: "Carrot Soup", group: "🥣 Stews & Soups", tier: 2, maxHealth: 20, maxStamina: 80, healthRegen: 2, staminaRegen: 10, duration: 900, spoilTime: 1200, color: "#FFB74D", special: ["Stamina focused"] },
      { id: "f_tom_soup", name: "Tomato Soup", group: "🥣 Stews & Soups", dlc: "P", tier: 2, maxHealth: 80, maxStamina: 20, healthRegen: 8, staminaRegen: 2, duration: 900, spoilTime: 1200, color: "#E53935", special: ["Health focused soup"] },
      { id: "f_soy_stir", name: "Soy Stir Fry", group: "🥣 Stews & Soups", dlc: "P", tier: 4, maxHealth: 75, maxStamina: 150, healthRegen: 5, staminaRegen: 20, duration: 1800, spoilTime: 3600, color: "#689F38", special: ["Top tier veggie dish"] },

      // CATEGORY: BREADS, MUFFINS & ROASTS
      { id: "f_muffin", name: "Fruit Muffin", group: "🍞 Breads, Muffins & Roasts", tier: 3, maxHealth: 25, maxStamina: 150, healthRegen: 0, staminaRegen: 100, duration: 1200, spoilTime: 3600, color: "#FFB74D", special: ["Superior stamina recovery"] },
      { id: "f_pump_bread", name: "Pumpkin Bread", group: "🍞 Breads, Muffins & Roasts", tier: 3, maxHealth: 30, maxStamina: 120, healthRegen: 5, staminaRegen: 5, duration: 1800, spoilTime: 1800, color: "#FF8A65", special: ["+10% XP Bonus"] },
      { id: "f_pot_bread", name: "Potato Bread", group: "🍞 Breads, Muffins & Roasts", dlc: "P", tier: 3, maxHealth: 50, maxStamina: 100, healthRegen: 5, staminaRegen: 5, duration: 1800, spoilTime: 1800, color: "#D7CCC8", special: ["Prometheus staple bread"] },
      { id: "f_flatbread", name: "Flatbread", group: "🍞 Breads, Muffins & Roasts", tier: 2, maxHealth: 15, maxStamina: 60, healthRegen: 0, staminaRegen: 0, duration: 900, spoilTime: 1200, color: "#FFE082", special: ["Base ingredient for rolls"] },
      { id: "f_roast_veg", name: "Roast Vegetables", group: "🍞 Breads, Muffins & Roasts", tier: 2, maxHealth: 25, maxStamina: 100, healthRegen: 2, staminaRegen: 15, duration: 900, spoilTime: 1200, color: "#FFEE58", special: ["Stamina roast"] },
      { id: "f_roast_pump", name: "Roasted Pumpkin", group: "🍞 Breads, Muffins & Roasts", tier: 2, maxHealth: 40, maxStamina: 40, healthRegen: 5, staminaRegen: 5, duration: 900, spoilTime: 1200, color: "#FFB300", special: ["Balanced roast"] },
      { id: "f_fries", name: "Kumara Fries", group: "🍞 Breads, Muffins & Roasts", dlc: "P", tier: 2, maxHealth: 10, maxStamina: 125, healthRegen: 0, staminaRegen: 25, duration: 900, spoilTime: 1200, color: "#FFA726", special: ["Ultimate early stamina"] },

      // CATEGORY: BEVERAGES & PRESERVES
      { id: "f_beer", name: "Beer / Wine", group: "🍺 Beverages & Preserves", tier: 3, maxHealth: 0, maxStamina: 125, healthRegen: 0, staminaRegen: 125, duration: 900, spoilTime: Infinity, color: "#D4E157", special: ["No Spoilage", "+125% Stamina Regen"] },
      { id: "f_coffee", name: "Hot Coffee", group: "🍺 Beverages & Preserves", tier: 2, maxHealth: 0, maxStamina: 100, healthRegen: 0, staminaRegen: 150, duration: 600, spoilTime: 300, color: "#4E342E", special: ["Extreme stamina regen"] },
      { id: "f_tea", name: "Herbal Tea", group: "🍺 Beverages & Preserves", tier: 2, maxHealth: 25, maxStamina: 25, healthRegen: 15, staminaRegen: 15, duration: 600, spoilTime: 300, color: "#A5D6A7", special: ["Regen focused drink"] },
      { id: "f_pickled", name: "Pickled Carrots", group: "🍺 Beverages & Preserves", tier: 3, maxHealth: 25, maxStamina: 150, healthRegen: 0, staminaRegen: 0, duration: 1800, spoilTime: Infinity, color: "#FF9800", special: ["Canned - Never Spoils", "+10% Projectile Damage"] },
      { id: "f_avocado", name: "Pickled Avocado", group: "🍺 Beverages & Preserves", dlc: "P", tier: 3, maxHealth: 50, maxStamina: 125, healthRegen: 5, staminaRegen: 5, duration: 1800, spoilTime: Infinity, color: "#8BC34A", special: ["Prometheus Canned", "Never Spoils"] },
      { id: "f_berry_jam", name: "Berry Jam", group: "🍺 Beverages & Preserves", tier: 2, maxHealth: 20, maxStamina: 125, healthRegen: 0, staminaRegen: 0, duration: 1200, spoilTime: 7200, color: "#E91E63", special: ["High stamina preserve"] },
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  MOUNTS (Transportation & Combat)
  // ──────────────────────────────────────────────────────────
  mounts: {
    label: "Mounts & Pets",
    icon: "🐎",
    stats: [
      { key: "health",       label: "Health",         unit: "",    higher: true,  type: "bar",   max: 6000 },
      { key: "stamina",      label: "Stamina",        unit: "",    higher: true,  type: "bar",   max: 2000 },
      { key: "speed",        label: "Sprint Speed",   unit: "%",   higher: true,  type: "bar",   max: 150 },
      { key: "damage",       label: "Combat Damage",  unit: "",    higher: true,  type: "bar",   max: 200 },
      { key: "defense",      label: "Melee Resist",   unit: "%",   higher: true,  type: "bar",   max: 100 },
      { key: "slots",        label: "Cargo Slots",    unit: "",    higher: true,  type: "number" },
    ],
    items: [
      { id: "m_moa", name: "Moa", tier: 2, health: 500, stamina: 1200, speed: 120, damage: 25, defense: 5, slots: 10, color: "#81C784", special: ["Fastest in forests", "Extremely fragile"], description: "The scout's favorite. Excellent for crossing long distances quickly, but dies easily if caught by predators." },
      { id: "m_moa_arctic", name: "Arctic Moa", tier: 3, health: 650, stamina: 1100, speed: 115, damage: 30, defense: 10, slots: 10, color: "#4FC3F7", special: ["Cold resistance", "+5% Stamina in Arctic"], description: "Specifically adapted for the snow biomes. Slightly slower than the standard Moa but much hardier." },
      { id: "m_buffalo", name: "Buffalo", tier: 2, health: 1800, stamina: 800, speed: 85, damage: 85, defense: 40, slots: 36, color: "#8D6E63", special: ["Can pull heavy carts", "High damage charge"], description: "The definitive beast of burden. Slow and steady, capable of carrying massive amounts of ore and wood." },
      { id: "m_horse", name: "Terrenus (Horse)", tier: 2, health: 1000, stamina: 1000, speed: 105, damage: 45, defense: 15, slots: 24, color: "#A1887F", special: ["Well-balanced stats"], description: "A versatile mount with no specific weaknesses. Good for scouting and light cargo hauling." },
      { id: "m_zebra", name: "Zebra", tier: 3, dlc: "P", health: 1200, stamina: 1200, speed: 110, damage: 55, defense: 20, slots: 24, color: "#E0E0E0", special: ["Low water needs", "Heat resistance"], description: "The ultimate desert explorer. Requires taming on Prometheus but excels in extreme heat." },
      { id: "m_shaggy_zebra", name: "Shaggy Zebra", tier: 3, dlc: "P", health: 1400, stamina: 1000, speed: 105, damage: 60, defense: 25, slots: 24, color: "#CFD8DC", special: ["Cold resistance", "Higher health"], description: "The cold-climate variant of the Zebra. Thicker fur provides better protection in the tundra." },
      { id: "m_tusker", name: "Tusker", tier: 3, health: 2500, stamina: 600, speed: 75, damage: 120, defense: 55, slots: 42, color: "#546E7A", special: ["Massive carrying capacity", "Extreme defense"], description: "An absolute tank. Found in the Arctic, this creature can handle a polar bear head-on and keep walking." },
      { id: "m_ubis", name: "Ubis", tier: 4, dlc: "P", health: 1600, stamina: 1500, speed: 115, damage: 70, defense: 30, slots: 20, color: "#9C27B0", special: ["Poison DOT on attack", "Best regen"], description: "A lethal combat mount from Prometheus. Each strike infects enemies with a wasting poison." },
      { id: "m_mammoth", name: "Woolly Mammoth", tier: 4, health: 6000, stamina: 500, speed: 60, damage: 180, defense: 75, slots: 60, color: "#4E342E", special: ["Stomp AOE damage", "Immune to cold"], description: "The King of the Arctic. Unrivaled inventory space and health, but moves with glacial speed." },
      { id: "m_wolf", name: "Wolf (Tamed)", tier: 3, health: 900, stamina: 1400, speed: 120, damage: 95, defense: 15, slots: 12, color: "#757575", special: ["High combat DPS", "Can detect nearby prey"], description: "Technically a follower but can be mounted with the right talent. A fast, aggressive hunter." },
      { id: "m_wolf_conifer", name: "Conifer Wolf", tier: 2, health: 800, stamina: 1300, speed: 115, damage: 85, defense: 10, slots: 12, color: "#4E342E", special: ["Rip and Tear (Bleeding)", "Forest Specialist"], description: "The standard forest wolf. Agile and lethal in packs." },
      { id: "m_wolf_snow", name: "Snow Wolf", tier: 3, health: 1100, stamina: 1200, speed: 110, damage: 105, defense: 20, slots: 12, color: "#E1F5FE", special: ["Arctic Mutation (Freeze)", "Aura of Warmth"], description: "Genetically adapted for the Arctic. Provides warmth to its rider." },
      { id: "m_wolf_alpha", name: "Alpha Wolf", tier: 4, health: 2500, stamina: 1800, speed: 130, damage: 160, defense: 35, slots: 16, color: "#212121", special: ["Pack Leader Aura", "Instill Fear", "Elite/Boss Variant"], description: "The pinnacle of the lupine lineage. A massive, black-furred beast that commands entire packs." },
      { id: "m_hyena", name: "Hyena", tier: 3, dlc: "P", health: 1100, stamina: 1300, speed: 115, damage: 110, defense: 20, slots: 12, color: "#D7CCC8", special: ["Pack leader bonus", "Armor shred"], description: "A viscous predator from the Prometheus wastes. Excels in pack hunting and breaking enemy defenses." },
      { id: "m_raptor", name: "Raptor", tier: 4, dlc: "H", health: 1500, stamina: 1600, speed: 140, damage: 135, defense: 25, slots: 14, color: "#43A047", special: ["Extreme Speed", "Lethal Combatant", "Dangerous Horizons DLC"], description: "Fast, lethal, and prehistoric. The ultimate combat mount for those who can tame it." },
      { id: "m_slinker", name: "Slinker", tier: 4, dlc: "H", health: 1800, stamina: 1400, speed: 125, damage: 145, defense: 30, slots: 14, color: "#B0BEC5", special: ["Stealth Bonuses in Arctic", "High Mobility", "Dangerous Horizons DLC"], description: "An Arctic combat specialist that blends into the snow and ice." },
      { id: "m_draven", name: "Draven", tier: 3, dlc: "H", health: 2200, stamina: 1000, speed: 95, damage: 90, defense: 45, slots: 32, color: "#FFB300", special: ["Excellent Carry Balance", "High Stamina Efficiency", "Dangerous Horizons DLC"], description: "A camel-like hybrid that offers a perfect balance of speed and cargo capacity." }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  WILD ANIMALS (Predators & Prey)
  // ──────────────────────────────────────────────────────────
  wild_animals: {
    label: "Wild Animals",
    icon: "🐾",
    stats: [
      { key: "health",       label: "Base Health",    unit: "",    higher: true,  type: "bar",   max: 8000 },
      { key: "damage",       label: "Attack Power",   unit: "",    higher: true,  type: "bar",   max: 400 },
      { key: "speed",        label: "Movement",       unit: "",    higher: true,  type: "bar",   max: 150 },
      { key: "hostility",    label: "Hostility",      unit: "",    higher: false, type: "number" }, // 1: Passive, 2: Territorial, 3: Aggressive
    ],
    items: [
      { id: "w_deer", name: "Deer", tier: 1, health: 120, damage: 0, speed: 100, hostility: 1, color: "#8D6E63", special: ["Skittish"] },
      { id: "w_conifer_wolf", name: "Conifer Wolf (Wild)", tier: 2, health: 280, damage: 45, speed: 110, hostility: 3, color: "#4E342E", special: ["Pack Aggression"] },
      { id: "w_snow_wolf", name: "Snow Wolf (Wild)", tier: 3, health: 450, damage: 65, speed: 110, hostility: 3, color: "#E1F5FE", special: ["Freezing Bite"] },
      { id: "w_bear", name: "Brown Bear", tier: 2, health: 1200, damage: 120, speed: 85, hostility: 2, color: "#5D4037", special: ["High HP", "Slow Speed"] },
      { id: "w_polar_bear", name: "Polar Bear", tier: 4, health: 3500, damage: 280, speed: 90, hostility: 3, color: "#FFFFFF", special: ["Arctic Predator", "Lethal"] },
      { id: "w_jaguar", name: "Jaguar", tier: 3, health: 850, damage: 95, hostility: 3, speed: 120, color: "#FFA000", special: ["Ambush Predator"] },
      { id: "w_cougar", name: "Cougar", tier: 3, health: 750, damage: 85, hostility: 3, speed: 130, color: "#BCAAA4", special: ["Fastest Land Predator"] },
      { id: "w_scorpion", name: "Scorpion", tier: 3, health: 1100, damage: 110, hostility: 3, speed: 70, color: "#FFAB91", special: ["Poison Sting", "High Defense"] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  ANIMAL CARE (Feeds & Potions)
  // ──────────────────────────────────────────────────────────
  animal_care: {
    label: "Animal Care",
    icon: "🥣",
    stats: [
      { key: "foodValue",    label: "Food Value",     unit: "",    higher: true,  type: "number" },
      { key: "healthRegen",  label: "HP Regen",       unit: "/s",  higher: true,  type: "bar",   max: 50 },
      { key: "staminaRegen", label: "Stamina Regen",  unit: "/s",  higher: true,  type: "bar",   max: 50 },
      { key: "duration",     label: "Duration",       unit: "s",   higher: true,  type: "number" },
      { key: "spoilTime",    label: "Spoil Time",     unit: "h",   higher: true,  type: "number" },
    ],
    items: [
      { id: "af_seed", name: "Seed Animal Feed", tier: 1, foodValue: 100, healthRegen: 5, staminaRegen: 5, duration: 600, spoilTime: 8, color: "#81C784", special: ["Basic nutrition"], description: "Simple mixed seeds and fiber. Keeps your pet from starving but offers little else." },
      { id: "af_survival", name: "Survival Feed", tier: 2, foodValue: 150, healthRegen: 25, staminaRegen: 10, duration: 900, spoilTime: 12, color: "#64B5F6", special: ["+15% Physical Resist"], description: "Rich in vitamins and minerals. Significantly boosts the animal's natural defenses." },
      { id: "af_sprinters", name: "Sprinters Feed", tier: 2, foodValue: 125, healthRegen: 5, staminaRegen: 35, duration: 900, spoilTime: 12, color: "#FFD54F", special: ["+20% Sprint Speed"], description: "Infused with energy crystals. Perfect for long distance travel or escaping bad situations." },
      { id: "af_endurance", name: "Endurance Feed", tier: 3, foodValue: 200, healthRegen: 15, staminaRegen: 25, duration: 1800, spoilTime: 24, color: "#FF7043", special: ["-25% Stamina usage"], description: "High-tier feed that allows your mount to run for much longer without tiring." },
      { id: "af_quality", name: "Quality Feed", tier: 3, foodValue: 250, healthRegen: 40, staminaRegen: 40, duration: 1800, spoilTime: 48, color: "#A5D6A7", special: ["Best overall buffs"], description: "The ultimate pet food. Massive regen and total satiety for a long period." },
      { id: "af_arctic", name: "Arctic Specialist Feed", tier: 3, foodValue: 180, healthRegen: 20, staminaRegen: 20, duration: 1200, spoilTime: 72, color: "#B3E5FC", special: ["Immune to Hypothermia"], description: "Specialized formula for the coldest biomes. Keeps the animal's blood warm." },
      { id: "af_desert", name: "Desert Specialist Feed", tier: 3, foodValue: 180, healthRegen: 20, staminaRegen: 20, duration: 1200, spoilTime: 72, color: "#FFE082", special: ["Immune to Heatstroke"], description: "Prevents dehydration and heat-related stress in arid environments." },
      { id: "af_jungle", name: "Jungle Specialist Feed", tier: 4, dlc: "P", foodValue: 300, healthRegen: 30, staminaRegen: 30, duration: 1800, spoilTime: 24, color: "#C5E1A5", special: ["Immune to Poison/Infection"], description: "Essential and deadly. Protects your mount from the toxic flora and fauna of the jungle." },
      { id: "ap_regen", name: "Quick Regen Potion", tier: 2, foodValue: 0, healthRegen: 50, staminaRegen: 50, duration: 30, spoilTime: Infinity, color: "#E91E63", special: ["Instant effect", "Does not spoil"], description: "A concentrated serum that rapidly heals wounds. Best used mid-combat." },
      { id: "ap_speed", name: "Adrenaline Potion", tier: 3, foodValue: 0, healthRegen: 0, staminaRegen: 50, duration: 60, spoilTime: Infinity, color: "#7E57C2", special: ["+40% Sprint Speed", "No stamina drain (60s)"], description: "Forces the mount into an overdrive state. Useful for breaking through siege lines." }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  ENVIROSUITS (Survival Management)
  // ──────────────────────────────────────────────────────────
  envirosuits: {
    label: "Envirosuits",
    icon: "👨‍🚀",
    stats: [
      { key: "moduleSlots",  label: "Module Slots",   unit: "",    higher: true,  type: "number" },
      { key: "suitSlots",    label: "Suit Slots",     unit: "",    higher: true,  type: "number" }, // O2/Water slots
      { key: "physResist",   label: "Phys. Resist",   unit: "%",   higher: true,  type: "number" },
    ],
    items: [
      { id: "es_s5", name: "Xigo 'Hark' S5", tier: "W", moduleSlots: 2, suitSlots: 2, physResist: 10, color: "#78909C", special: ["Standard Choice", "Supports O2/Water Canteen"] },
      { id: "es_s5x", name: "Xigo S5-X", tier: "W", moduleSlots: 2, suitSlots: 2, physResist: 5, color: "#90A4AE", special: ["Early Workshop Suit"] },
      { id: "es_lua", name: "Inaris 'Lua'", tier: "W", moduleSlots: 3, suitSlots: 1, physResist: 8, color: "#FFD54F", special: ["Module Focused", "High Tech"] },
      { id: "es_hark_v2", name: "Xigo 'Hark' V2", tier: "W", moduleSlots: 4, suitSlots: 2, physResist: 15, color: "#546E7A", special: ["End-game Suit", "Maximum Utility"] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  MODULES (Character Augmentation)
  // ──────────────────────────────────────────────────────────
  modules: {
    label: "Modules",
    icon: "🔌",
    stats: [
      { key: "tier",         label: "Tier",           unit: "",    higher: false, type: "number" },
      { key: "effect",       label: "Main Bonus",     unit: "%",   higher: true,  type: "number" },
    ],
    items: [
      { id: "mod_mass", name: "Mass Dampener", tier: "W", effect: 5, color: "#4FC3F7", special: ["+5% Movement Speed", "Stackable"] },
      { id: "mod_miner", name: "Miner's Module", tier: "W", effect: 10, color: "#FFB300", special: ["+10% Mining Yield"] },
      { id: "mod_doseup", name: "DoseUp Module", tier: "W", effect: 15, color: "#66BB6A", special: ["-15% Food/O2 Consumption"] },
      { id: "mod_strength", name: "Strength Boost", tier: "W", effect: 10, color: "#EF5350", special: ["+10% Melee Damage", "+5% Carry Weight"] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  PROJECTILES (Ammo)
  // ──────────────────────────────────────────────────────────
  projectiles: {
    label: "Projectiles",
    icon: "🎯",
    stats: [
      { key: "damage",       label: "Base Damage",    unit: "",    higher: true,  type: "bar",   max: 150 },
      { key: "armorPen",     label: "Armor Pen",      unit: "%",   higher: true,  type: "number" },
    ],
    items: [
      { id: "proj_flint", name: "Larkwell Flint Arrow", tier: "W", damage: 45, armorPen: 10, color: "#78909C", special: ["Workshop Starter Arrow", "Reusable"] },
      { id: "proj_carbon", name: "Larkwell Carbon Arrow", tier: "W", damage: 110, armorPen: 25, color: "#455A64", special: ["Best Workshop Arrow", "High Velocity"] },
      { id: "proj_shengong", name: "Shengong 'Ji' Arrow", tier: "W", damage: 85, armorPen: 15, color: "#FBC02D", special: ["Fastest Arrow Speed"] },
      { id: "proj_inaris_bolt", name: "Inaris Poison Bolt", tier: "W", damage: 95, armorPen: 20, color: "#FFD54F", special: ["Inflicts Lethal Poison", "Workshop Bolt"] }
    ]
  },

  // ──────────────────────────────────────────────────────────
  //  SURVIVAL (Utility)
  // ──────────────────────────────────────────────────────────
  survival: {
    label: "Survival Tools",
    icon: "🎒",
    stats: [
      { key: "capacity",     label: "Capacity",       unit: "",    higher: true,  type: "bar",   max: 5000 },
      { key: "weight",       label: "Weight",         unit: "kg",  higher: false, type: "number" },
    ],
    items: [
      { id: "ut_canteen", name: "Workshop Canteen", tier: "W", capacity: 2000, weight: 1.0, color: "#4FC3F7", special: ["Never Leaks", "Large Capacity"] },
      { id: "ut_o2_tank", name: "Workshop O2 Tank", tier: "W", capacity: 4000, weight: 1.0, color: "#B3E5FC", special: ["High Capacity O2", "Refillable"] },
      { id: "ut_scanner", name: "Advanced Scanner", tier: "W", capacity: 0, weight: 2.0, color: "#FFB300", special: ["Locates specific exotics/ore"] }
    ]
  }
};
