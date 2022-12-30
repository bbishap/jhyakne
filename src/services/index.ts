export const postUserDetails = async ({endpoint, data}: any) => {
    const url = "localhost:3000/" + endpoint

    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      });
      return response.json();
}

export const getUserList = async (endpoint: any) => {
    const url = "localhost:3000/" + endpoint

    const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      return response.json();
}

