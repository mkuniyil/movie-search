import * as React from "react";
import cx from "classnames";

import { Movie } from "../../utils/search";
import { checkForValueUrl } from "./utils";

type ImageProps = Pick<Movie, "Poster" | "Title">;

const Image: React.FunctionComponent<ImageProps> = ({ Poster, Title }) => {
  return (
    <div
      className={cx(
        "aspect-[2/3]",
        "overflow-hidden",
        "rounded-xl",
        "border-[1px]",
        "bg-neutral-100",
        "border-neutral-200"
      )}
    >
      {checkForValueUrl(Poster) ? (
        <img
          src={Poster}
          alt={Title}
          className={cx("object-cover", "h-full")}
          data-testid="imgElem"
        />
      ) : (
        <div className={cx("bg-red-100", "h-full")} data-testid="imgAltElem" />
      )}
    </div>
  );
};

export default Image;
