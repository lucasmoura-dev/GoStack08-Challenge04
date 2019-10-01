import React, { Component } from 'react';

import './PostList.css';

import Post from '../Post/Post';

/* Dogs images */
import Lili from '../../assets/images/dogs/lili.jpg';
import Rottweiler from '../../assets/images/dogs/rottweiler.jpg';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Lili Moura',
          avatar: Lili,
        },
        date: '30 Set 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        coments: [
          {
            id: 1,
            author: {
              name: 'Pinsher Brabo',
              avatar: Rottweiler,
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Dog Lisboa',
          avatar: Lili,
        },
        date: '04 Set 2019',
        content: 'Fala galera, beleza\nEstou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        coments: [
          {
            id: 1,
            author: {
              name: 'Dog2',
              avatar: Rottweiler,
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: 'Dog3',
              avatar: Rottweiler,
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ],
  };
  
  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <Post 
            key={post.id}
            author={post.author} 
            date={post.date} 
            content={post.content} 
            comments={post.coments}
          />
        ))}
      </div>
    );
  }
}

export default PostList;