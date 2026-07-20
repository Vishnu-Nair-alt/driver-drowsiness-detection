import cv2
from datetime import datetime
from pathlib import Path


CAPTURES_DIR = Path(__file__).resolve().parents[1] / "captures"


def save_snapshot(frame):
    """Save a timestamped webcam frame and return its path."""
    CAPTURES_DIR.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S_%f")
    snapshot_path = CAPTURES_DIR / f"snapshot_{timestamp}.jpg"

    if not cv2.imwrite(str(snapshot_path), frame):
        raise OSError(f"Could not save snapshot to {snapshot_path}")

    return snapshot_path


def main():
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("Error: Could not access webcam.")
        return

    while True:
        ret, frame = cap.read()

        if not ret:
            print("Error: Failed to read frame.")
            break

        cv2.putText(
            frame,
            "S: save snapshot | Q: quit",
            (10, 30),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.7,
            (0, 255, 0),
            2,
        )
        cv2.imshow("Driver Drowsiness Detection", frame)

        key = cv2.waitKey(1) & 0xFF
        if key == ord("s"):
            try:
                snapshot_path = save_snapshot(frame)
                print(f"Snapshot saved: {snapshot_path}")
            except OSError as error:
                print(f"Error: {error}")
        elif key == ord("q"):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
