import { HgsRestApi } from './types/generated/client/ClientApis';

let baseServerUrl: string;
let sessionToken: string;

export async function setGrahQLBaseServerUrl(url) {
  baseServerUrl = url;
}
export async function setGraphQlSessionToken(newSessionToken: string) {
  sessionToken = newSessionToken;
}

export async function fetchGraphQL(query: string) {
  const response = await fetch(`${baseServerUrl}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(sessionToken
          ? { Authorization: `sessionToken ${sessionToken}` }
          : {}
        ),
    },
    body: JSON.stringify({
      query,
    }),
  });

  if (!HgsRestApi.is2xx(response)) {
    console.log(JSON.stringify(await response.json(), null, 2));
    throw new Error(response.status.toString());
  }

  return (await response.json()).data;
}
