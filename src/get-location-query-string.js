import qs from 'qs';

export default function getLocationQueryString() {
  const search = window.location.search.slice(1);
  const queryParams = qs.parse(search);
  return {
    uid: queryParams.uid
  }
}
