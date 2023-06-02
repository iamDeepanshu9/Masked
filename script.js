const items = [
    { id: 1, link: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rMFE3AqYr6l-w_U8aYqAVt49oZ7Nli4yRYCxEqovvXelnExUs3hD73t0dy4gwLx_wL2LgOqH3t0DQqZwsrLmpR5Oeuwg=s1600?source=screenshot.guru" },
    { id: 2, link: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81rMFE3AqYr6l-w_U8aYqAVt49oZ7Nli4yRYCxEqovvXelnExUs3hD73t0dy4gwLx_wL2LgOqH3t0DQqZwsrLmpR5Oeuwg=s1600" },
    { id: 3, link: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81obR9z17CtOLkCBav3Az2WEXpzLmDbIcju-D0SKQq7jpe1MrvkIz5H91gcKtXxzk4hL44dTEHx4CbLqnkRHehGXSsN8wQ=s1600?source=screenshot.guru" },
    { id: 4, link: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81obR9z17CtOLkCBav3Az2WEXpzLmDbIcju-D0SKQq7jpe1MrvkIz5H91gcKtXxzk4hL44dTEHx4CbLqnkRHehGXSsN8wQ=s1600" },
    { id: 4, link: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qiuIILqefy-krVzz5WPr5GRA-zFDkQFgCOQ1FtYjxMHnZUw6og2nVIH6_c_Bm0MIPdc13hlByNJBxA6VzB4bBt825vhw=s1600?source=screenshot.guru" },
    { id: 5, link: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81qiuIILqefy-krVzz5WPr5GRA-zFDkQFgCOQ1FtYjxMHnZUw6og2nVIH6_c_Bm0MIPdc13hlByNJBxA6VzB4bBt825vhw=s1600" },
    { id: 6, link: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81oMc-3Oe-MplH81S7kWczu3iQ55648_3oBM1D27nAvBucMHk0NStqsuvWTrDNFvQJfP2br3ULO7OT77K_34DoKf-66bDQ=s1600?source=screenshot.guru" },
]

const container = document.getElementById('container');
console.log(container);

// Loop through the items and create container cards
items.forEach((item, index) => {
    console.log(item)
  // Create a card element
  const card = document.createElement('div');
  card.className = 'card';

  // Create an anchor element
  const anchor = document.createElement('a');
  anchor.href = item.link;
  anchor.target = '_blank'; // Open link in a new tab

  // Create an image element
  const image = document.createElement('img');
  image.src = item.link;

  // Append the image to the anchor
//   anchor.appendChild(image);

  // Append the anchor to the card
  card.appendChild(anchor);

  // Append the card to the container
  container.appendChild(card);

  // Assign the sequence number to the id property
  item.id = index + 1;
});
  

