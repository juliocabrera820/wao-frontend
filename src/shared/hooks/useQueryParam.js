export const useQueryParam = (param) => {
  const parsedUrl = new URL(window.location.href);

  return parsedUrl.searchParams.get(param);
}