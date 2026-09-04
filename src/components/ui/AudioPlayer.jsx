import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Music, X, SkipBack } from "lucide-react";

const track = {
  title: "Happiness",
  artist: "Rex Orange County",
  album: "Apricot Princess",
  image: "/audio/cover.jpg",
  src: "/audio/happiness.mp3",
  icon: "♫",
};

export default function AudioPlayer() {
  const [minimized, setMinimized] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
      audio.currentTime = 0;
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, [playing]);

  const togglePlay = () => setPlaying((p) => !p);

  const seek = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    audio.currentTime = x * duration;
  };

  const formatTime = (s) => {
    if (!s || !isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const restart = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    setProgress(0);
  };

  return (
    <>
      <audio ref={audioRef} preload="metadata" src={track.src} />

      <AnimatePresence>
        {minimized ? (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
            onClick={() => setMinimized(false)}
            aria-label="Open music player"
            style={{
              position: "fixed",
              bottom: 32,
              right: 32,
              zIndex: 50,
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "var(--ink)",
              color: "var(--canvas)",
              border: "none",
              cursor: "pointer",
              display: "grid",
              placeItems: "center",
              boxShadow: "0 8px 32px rgba(26,26,26,0.25)",
              overflow: "hidden",
            }}
          >
            <Music size={22} style={{ position: "relative", zIndex: 1 }} />
          </motion.button>
        ) : (
          <motion.div
            key="player"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            style={{
              position: "fixed",
              bottom: 32,
              right: 32,
              zIndex: 50,
              width: 320,
              borderRadius: 18,
              background: "var(--canvas)",
              border: "1px solid var(--line)",
              boxShadow: "0 16px 56px rgba(26,26,26,0.2)",
              overflow: "hidden",
              fontFamily: "var(--font-body)",
            }}
          >
            {/* Album art */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1",
                overflow: "hidden",
              }}
            >
              <img
                src={track.image}
                alt={`${track.album} cover`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, var(--canvas) 0%, transparent 40%)",
                }}
              />
              <button
                onClick={() => {
                  setPlaying(false);
                  setMinimized(true);
                }}
                aria-label="Close player"
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "color-mix(in srgb, var(--canvas) 85%, transparent)",
                  backdropFilter: "blur(8px)",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--ink)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Track info + controls — positioned below the art */}
            <div style={{ padding: "16px 20px 20px", marginTop: -24, position: "relative", zIndex: 2 }}>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 1.2,
                }}
              >
                {track.title}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--ink-soft)",
                  marginTop: 2,
                }}
              >
                {track.artist} &middot; {track.album}
              </div>

              {/* Progress bar */}
              <div
                onClick={seek}
                style={{
                  height: 4,
                  borderRadius: 2,
                  background: "var(--line)",
                  cursor: "pointer",
                  margin: "16px 0 8px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: 2,
                    background: "var(--accent)",
                    width: `${progress * 100}%`,
                    transition: "width 0.1s linear",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: `${progress * 100}%`,
                    transform: "translate(-50%, -50%)",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    boxShadow: "0 2px 8px rgba(200,67,46,0.3)",
                    opacity: progress > 0 ? 1 : 0,
                    transition: "opacity 0.2s ease",
                  }}
                />
              </div>

              {/* Time */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "0.7rem",
                  color: "var(--ink-soft)",
                  marginBottom: 14,
                }}
              >
                <span>{formatTime(progress * duration)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              {/* Controls */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <button
                  onClick={restart}
                  aria-label="Restart track"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--ink-soft)",
                    padding: 8,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "50%",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--ink)";
                    e.currentTarget.style.background = "var(--canvas-2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--ink-soft)";
                    e.currentTarget.style.background = "none";
                  }}
                >
                  <SkipBack size={18} />
                </button>
                <button
                  onClick={togglePlay}
                  aria-label={playing ? "Pause" : "Play"}
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "var(--ink)",
                    color: "var(--canvas)",
                    border: "none",
                    cursor: "pointer",
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0 4px 16px rgba(26,26,26,0.2)",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {playing ? (
                    <Pause size={22} />
                  ) : (
                    <Play size={22} style={{ marginLeft: 2 }} />
                  )}
                </button>
                <button
                  onClick={restart}
                  aria-label="Restart track"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--ink-soft)",
                    padding: 8,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "50%",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--ink)";
                    e.currentTarget.style.background = "var(--canvas-2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--ink-soft)";
                    e.currentTarget.style.background = "none";
                  }}
                >
                  <SkipBack size={18} style={{ transform: "scaleX(-1)" }} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
