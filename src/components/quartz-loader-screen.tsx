type QuartzLoaderScreenProps = {
  className?: string;
  isOpening?: boolean;
};

export function QuartzLoaderScreen({
  className = "",
  isOpening = false,
}: QuartzLoaderScreenProps) {
  return (
    <div
      className={`quartz-loader-screen ${isOpening ? "quartz-loader-screen-open" : ""} relative min-h-screen overflow-hidden ${className}`.trim()}
    >
      <div className="quartz-loader-panel quartz-loader-panel-top" />
      <div className="quartz-loader-panel quartz-loader-panel-bottom" />
      <div className="quartz-loader-line">
        <span />
      </div>
    </div>
  );
}
