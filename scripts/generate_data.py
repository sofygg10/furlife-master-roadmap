# -*- coding: utf-8 -*-
"""
FurLife Master Checklist Data Generator
Generates:
  - js/data-modules.js (59 detailed veterinary SaaS modules with 800+ tasks)
  - js/data-processes.js (37 End-to-End processes with detailed technical tasks)
  - js/data-architecture.js (20 Architecture areas & 36 Data Model entities)
"""
import json
import os

def create_task(tid, title, desc, cat, phase, priority, deps=None):
    return {
        "id": tid,
        "title": title,
        "description": desc,
        "category": cat,
        "phase": phase,
        "priority": priority,
        "status": "Pendiente",
        "completed": False,
        "dependencies": deps or [],
        "notes": ""
    }

# Ensure output directories exist
os.makedirs("js", exist_ok=True)
os.makedirs("css", exist_ok=True)

print("Compiling modules data...")
