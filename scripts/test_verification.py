# -*- coding: utf-8 -*-
import json
import re

print("--- Testing js/data-modules.js ---")
with open("js/data-modules.js", "r", encoding="utf-8") as f:
    c = f.read()
    prefix = "window.FURLIFE_MODULES = "
    idx = c.find(prefix)
    mods = json.loads(c[idx + len(prefix):].rstrip(";\n "))
    total_mod_tasks = sum(len(m["tasks"]) for m in mods)
    print(f"Modules loaded: {len(mods)}")
    print(f"Total tasks in modules: {total_mod_tasks}")
    # Verify module 8 has 27 tasks
    mod8 = next(m for m in mods if m["id"] == "MOD-08")
    print(f"Module 8 ({mod8['name']}) tasks count: {len(mod8['tasks'])}")

print("\n--- Testing js/data-processes.js ---")
with open("js/data-processes.js", "r", encoding="utf-8") as f:
    c = f.read()
    prefix = "window.FURLIFE_PROCESSES = "
    idx = c.find(prefix)
    procs = json.loads(c[idx + len(prefix):].rstrip(";\n "))
    total_proc_tasks = sum(len(p["techTasks"]) for p in procs)
    print(f"Processes loaded: {len(procs)}")
    print(f"Total tasks in processes: {total_proc_tasks}")

print("\n--- Testing js/data-architecture.js ---")
with open("js/data-architecture.js", "r", encoding="utf-8") as f:
    c = f.read()
    arch_match = re.search(r"window\.FURLIFE_ARCHITECTURE\s*=\s*(\[.*?\]);", c, re.DOTALL)
    models_match = re.search(r"window\.FURLIFE_DATA_MODELS\s*=\s*(\[.*?\]);", c, re.DOTALL)
    phases_match = re.search(r"window\.FURLIFE_ROADMAP_PHASES\s*=\s*(\[.*?\]);", c, re.DOTALL)
    luna_match = re.search(r"window\.FURLIFE_LUNA_SPECS\s*=\s*(\{.*?\});", c, re.DOTALL)

    arch = json.loads(arch_match.group(1))
    models = json.loads(models_match.group(1))
    phases = json.loads(phases_match.group(1))
    luna = json.loads(luna_match.group(1))

    total_arch_tasks = sum(len(a["tasks"]) for a in arch)
    total_model_tasks = sum(len(m["tasks"]) for m in models)

    print(f"Architecture areas: {len(arch)} with {total_arch_tasks} tasks")
    print(f"Data Model entities: {len(models)} with {total_model_tasks} tasks")
    print(f"Roadmap phases: {len(phases)}")
    print(f"Luna specs loaded: {luna['name']}")

grand_total = total_mod_tasks + total_proc_tasks + total_arch_tasks + total_model_tasks
print(f"\n==========================================")
print(f"GRAND TOTAL ACTIONABLE ENGINEERING TASKS: {grand_total}")
print(f"==========================================")
