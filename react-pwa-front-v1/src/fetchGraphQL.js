async function fetchGraphQL(text, variables) {
    console.log("Hostname: ", window.location.hostname);
    const response = await fetch(`http://${window.location.hostname}:4000/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });
    return await response.json();
}

export default fetchGraphQL;