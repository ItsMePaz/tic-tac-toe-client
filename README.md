**Game Plan**

Create a Tic-Tac-Toe web-platform multiplayer game utilizing the following techologies and libraries:

React.js - TypeScript - TailwindCSS - Framer Motion - Node.js - Express.js - Socket.io

**Steps I took**

1. Created frontend ui showcasing the user stories
2. Create backend setup
3. Study and understand web socket connection and resolving typescript error on react
4. Devise an algorithm, that is a side effect, that knows who the screen player and the enemy player is.
5. Make the buttons in the Board respond in a way that is suppose to respond. For example, if player1 presses the button, show "X" on the button and disable the specific button.
6. Append updated button values of both players and disable those buttons with values
7. Devise an algorithm that determines the winning combination and create its code

**Difiicult Challenges/Blockers**

1. Setting up the backend
2. Fixing and adapting with typescript errors
3. Understanding the connection between the socket server and the client
4. Setting up connection to the socket.io server
5. Reading and manipulating objects emitted and received on the socket
6. Pushing the value of the button clicked into the pattern array - which is repeatedly checked by the algotithm to see if the player had one.
7. Changed values of a button by a player gets removed when another button changes its value
8. Devising the algorithm and code used to make a turn-based event.
9. Managing useEffect hooks

**Installed Dependencies**
Fontend:
npm i socket.io
npm i socket.io-client
npm i framer-motion

**Collective Resources**

https://www.youtube.com/watch?v=djMy4QsPWiI (This here helped me understand how to connect socket.io server in the backend to the frontend)
