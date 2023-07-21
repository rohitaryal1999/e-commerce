import NextLink, { LinkProps } from "next/link";
import { useRouter as useNextRouter } from "next/router";
import { FC } from "react";
import { Url } from "url";

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}

export type NavigateType = (
  url: Url | string,
  as?: Url,
  options?: TransitionOptions
) => Promise<boolean>;

const Link: FC<
  LinkProps & {
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
  }
> = ({ href, children, className, disabled = false, ...props }) =>
  disabled ? (
    <div className={className}>{children}</div>
  ) : (
    <NextLink
      href={
        typeof href === "string"
          ? {
              pathname: href,
            }
          : href
      }
      passHref
      {...props}
    >
      <div className={className}>{children}</div>
    </NextLink>
  );

export const useNavigation = (): NavigateType => {
  const router = useNextRouter();

  return (url, ...rest) =>
    router.push(
      typeof url === "string"
        ? {
            pathname: url,
          }
        : url,
      ...rest
    );
};

export default Link;
