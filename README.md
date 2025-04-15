# GenAssist

```
yakuza-system/
│
├── README.md               # Project documentation
├── requirements.txt        # Project dependencies
├── setup.py                # Installation script
│
├── data/                   # Data directory
│   ├── videos/             # Input videos folder
│   └── photos/             # Input photos folder
│   ├── database.py
│
├── output/                 # Output directory
│   ├── processed_videos/   # Processed video files
│   └── analysis_reports/   # Text analysis reports
│
├── application/                    # Source code
│   ├── __init__.py
│   ├── main.py                 # Main queue system that controls other classes
│   ├── proximity_YOLO.py       # Object detection module
│   ├── depth_processor.py      # Depth analysis module
│   ├── direction_provider.py   # Direction guidance module (left-right-front-back)
│   ├── descriptiveness.py      # Descriptiveness guidance module
│   └── question_answer.py      # Environment analysis module

│
├── models/                 # Model files directory
│   ├── yolov8n-seg.pt      # YOLO segmentation model
│   └── walkable_model.pt   # Walkable area detection model

```
