export const feedArray = [
    {   
        id: 'p1',
        name: 'Kanye West',
        picture: '../assets/kanye.jpeg',
        modifiedDate: '20200205',
        category: 'entertaiment',
        upVotes: '64',
        downVotes: '36',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel pellentesque enim'
    },
    {   
        id: 'p2',
        name: 'Mark Zuckerberg',
        picture: '../assets/mark.jpeg',
        modifiedDate: '20200205',
        category: 'business',
        upVotes: '36',
        downVotes: '64',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel pellentesque enim'
    },
    {   
        id: 'p3',
        name: 'Cristina Fernandez de Kirchner',
        picture: '../assets/cristina.jpeg',
        modifiedDate: '20200205',
        category: 'politics',
        upVotes: '36',
        downVotes: '64',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel pellentesque enim'
    },
    {   
        id: 'p4',
        name: 'Malala Yousafzai',
        picture: '../assets/malala.jpeg',
        modifiedDate: '20200205',
        category: 'entertaiment',
        upVotes: '64',
        downVotes: '36',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel pellentesque enim'
    }

];

export function getVotePercentage(up, down){
    const total = parseInt(up) + parseInt(down);
    return {
        upVote: (up/total)*100,
        downVote: (down/total)*100
    };
}

