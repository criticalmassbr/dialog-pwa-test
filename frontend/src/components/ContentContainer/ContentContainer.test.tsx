
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { FIND_QUERY } from "../../queries/Users/userQueries"
import ContentContainer from "./ContentContainer"
import { render, waitForElement, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import 'jest-styled-components'
// The component AND the query need to be exported
//This is a low coverage test only to ilustrate testing and mocking with the apollo client/provider
const mocks = [
  {
    request: {
      query: FIND_QUERY,

    },
    result: {
      data: {
        list: [{ 
          name: "Cecilia Phillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "123",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        },{ 
          name: "CeasdPhillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "123sdgsd",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        },{ 
          name: "Cec ps",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "124123",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        }],
      },
    },
  },
  {
    request: {
      query: FIND_QUERY,
      variables: {
        name: "Cecilia Phillips"
      }
    },
    result: () => { 
    console.log("exec0")
    return ({
      data: {
        list: [{ 
          id: "123",
          name: "Cecilia Phillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [
            { 
              name: "CeasdPhillips",
              age: "30",
              email: "ceciliaphillips@daido.com",
              id: "123sdgsd",
              index: "0",
              picture: "testStr",
              eyeColor: "testStr",
              company: "testStr",
              phone: "testStr",
              friends: [],
              greeting: "testStr",
            },{ 
              name: "Cec ps",
              age: "30",
              email: "ceciliaphillips@daido.com",
              id: "124123",
              index: "0",
              picture: "testStr",
              eyeColor: "testStr",
              company: "testStr",
              phone: "testStr",
              friends: [],
              greeting: "testStr",
            }
          ],
          greeting: "testStr",
        }],
      },
    })}
  },
]; 
 

it('Tests rendering with initial data and search query', async () => {
  await act(async ()=>{
    render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ContentContainer/>
    </MockedProvider>)}
  );
  //checks if container (that doesnt depend on the query answer) is rendered
  const getContainer = await waitForElement(() => screen.findByTestId("userContainer"))
  expect(getContainer).toBeDefined();
  
  //checks if userCard (that depends on the query answer, so its proof of the query return) is rendered
  const getUserCard = await waitForElement(() => screen.findAllByTestId("userCard"))//example using screen object
  expect(getUserCard).toBeDefined();

  //simulates search input and checks if executed
  const searchBar = await waitForElement(() => screen.findByTestId("searchBar"))//example using callback from render destructuring
  expect(searchBar).toBeDefined();
  //awaits for event execution and wraps act() around event call to signify a side-effect producing execution
  await act(async()=> { fireEvent.input(searchBar, { target: { value: "Cecilia Phillips" } }) });


  //gets element with data-testid equal to the search value inputed. proving that the query was executed and related data rendered
  const getUserTestId = await waitForElement(() => screen.findByTestId("Cecilia Phillips"))
  expect(getUserTestId).toBeDefined();
  //gets element that contains the text from the result of the search value inputed. 
  //confirming that the query was executed and related data rendered. Example of /i notation.
  const getUserName = await waitForElement(() => screen.findByText(/Cecilia Phillips/i))
  expect(getUserName).toBeDefined();
});



const snapshotMocks = [
  {
    request: {
      query: FIND_QUERY,

    },
    result: {
      data: {
        list: [{ 
          name: "Cecilia Phillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "123",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        },{ 
          name: "CeasdPhillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "123sdgsd",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        },{ 
          name: "Cec ps",
          age: "30",
          email: "ceciliaphillips@daido.com",
          id: "124123",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [],
          greeting: "testStr",
        }],
      },
    },
  },
  {
    request: {
      query: FIND_QUERY,
      variables: {
        name: "Cecilia Phillips"
      }
    },
    result: () => { 
    console.log("exec 1")
    return ({
      data: {
        list: [{ 
          id: "123",
          name: "Cecilia Phillips",
          age: "30",
          email: "ceciliaphillips@daido.com",
          index: "0",
          picture: "testStr",
          eyeColor: "testStr",
          company: "testStr",
          phone: "testStr",
          friends: [
            { 
              name: "CeasdPhillips",
              age: "30",
              email: "ceciliaphillips@daido.com",
              id: "123sdgsd",
              index: "0",
              picture: "testStr",
              eyeColor: "testStr",
              company: "testStr",
              phone: "testStr",
              friends: [],
              greeting: "testStr",
            },{ 
              name: "Cec ps",
              age: "30",
              email: "ceciliaphillips@daido.com",
              id: "124123",
              index: "0",
              picture: "testStr",
              eyeColor: "testStr",
              company: "testStr",
              phone: "testStr",
              friends: [],
              greeting: "testStr",
            }
          ],
          greeting: "testStr",
        }],
      },
    })}
  },
]; 
 
it("Tests Snapshot", async () => {
  let _container: any;
  await act(async ()=> {
    const { container } = await render(
      <MockedProvider mocks={snapshotMocks} addTypename={false}>
        <ContentContainer/>
      </MockedProvider>)
    _container = container;
    }
  );
  //await some time before taking snapshot to avoid catching loading state
  await waitForElement(() =>
    setTimeout(() => {}, 2000)
  )
  expect(
    _container.firstChild
  ).toMatchSnapshot()
});