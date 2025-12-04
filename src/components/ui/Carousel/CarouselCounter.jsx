const CarouselCounter = ({
  current,
  total,
  className = "flex items-center gap-2",
  textClassName = "text-sm text-gray-500 font-medium"
}) => {
  return (
    <div className={className}>
      <span className={textClassName}>
        {current} / {total}
      </span>
    </div>
  );
};

export default CarouselCounter;
