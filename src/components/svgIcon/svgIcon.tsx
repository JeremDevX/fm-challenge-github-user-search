import { SVGIconProps } from "@/utils/icons";

interface SVGIconJSX extends SVGIconProps {
  className?: string;
}

export default function SVGIcon(props: SVGIconJSX) {
  const { paths, fill, width, height, className } = props;

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      {paths.length > 1 ? (
        <g fill={fill} fillRule="nonzero">
          {paths.map((path, index) => (
            <path key={index} d={path} />
          ))}
        </g>
      ) : (
        <path fill={fill} d={paths[0]} />
      )}
    </svg>
  );
}
