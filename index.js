const users = [];

const data = [
  {
    user_login: 'userA',
    followers: ['userB', 'userD', 'userE', 'userG'],
    followings: [],
  },
  {
    user_login: 'userB',
    followers: ['userC', 'userJ', 'userI', 'userE'],
    followings: [],
  },
  {
    user_login: 'userC',
    followers: ['userM', 'userA', 'userJ', 'userI', 'userZ'],
    followings: [],
  },
  {
    user_login: 'userZ',
    followers: ['userP', 'userN', 'userC', 'userJ', 'userK'],
    followings: [],
  },
];

async function getUserFromData(login) {
  let result = {};
  for (element in data) {
    if (data[element]['user_login'] == login) {
      result = data[element];
    }
  }
  return result;
}

async function getFollowers(login) {
  let result = [];
  for (let element in data) {
    if (data[element]['user_login'] == login) {
      result = data[element]['followers'];
    }
  }
  return result;
}

async function CalculateDistance() {
  let distance = 0;
  let message = 'Error de datos ingresados';
  if (ValidateUsers()) {
    userStart = $('#user_start').val();
    userEnd = $('#user_end').val();

    distance = await calculateDistanceBetweenUsers(userStart, userEnd);

    message =
      "Distancia entre '" +
      userStart +
      "' y '" +
      userEnd +
      "', es: " +
      distance;
  }

  console.log(message);
  $('#response').html(message);
}

async function calculateDistanceBetweenUsers(userStart, userEnd) {
  const followersUserStart = await getFollowers(userStart);

  if (userStart === userEnd) {
    return 0;
  }
  if (followersUserStart.includes(userEnd)) {
    return 1;
  }

  let searchData = followersUserStart.map((node) => ({ node, level: 2 }));

  while (searchData.length > 0) {
    const { node, level } = searchData.shift();
    const followersToNode = await getFollowers(node);

    if (!followersToNode.length) {
      continue;
    }

    if (followersToNode.includes(userEnd)) {
      return level;
    }

    followersToNode.forEach((item) => {
      if (item !== userStart && item !== node) {
        searchData.push({ node: item, level: level + 1 });
      }
    });

    searchData = searchData.filter(
      ({ node: previousNode }) => previousNode !== node
    );
  }

  return -1;
}

function ValidateUsers() {
  let userStart = $('#user_start').val();
  let userEnd = $('#user_end').val();
  let response = false;

  if (userStart == '' || userStart == undefined || userStart == null) {
    alert('Ingrese usuario de inicio');
  } else if (userEnd == '' || userEnd == undefined || userEnd == null) {
    alert('Ingrese usuario de final');
  } else {
    response = true;
  }

  return response;
}

module.exports = calculateDistanceBetweenUsers;
