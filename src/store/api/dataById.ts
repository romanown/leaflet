export const getDataById: any = (id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then((response) => response.json());
