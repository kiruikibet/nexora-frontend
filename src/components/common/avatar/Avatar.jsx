import { avatarBase, avatarSizes } from "./AvatarVariants";

function Avatar({
  src,
  name = "",
  size = "medium",
  alt,
  className = "",
  onClick,
}) {
  const initials = getInitials(name);

  return (
    <div
      onClick={onClick}
      className={[
        avatarBase,
        avatarSizes[size] || avatarSizes.medium,
        onClick ? "cursor-pointer" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {src ? (
        <img
          src={src}
          alt={alt || name}
          className="h-full w-full object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );
}

function getInitials(name) {
  if (!name.trim()) return "?";

  const names = name.trim().split(" ");

  if (names.length === 1) {
    return names[0][0].toUpperCase();
  }

  return (names[0][0] + names[names.length - 1][0]).toUpperCase();
}

export default Avatar;
