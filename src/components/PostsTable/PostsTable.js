import React from 'react'
import {Table} from "react-bootstrap";
import s from './postTable.module.css';
import arrowDown from '../../assets/icons/arrow_down.png';
import arrowUp from '../../assets/icons/arrow_up.png';

const PostsTable = ({posts, sortSettings, setSort}) => {
    const {sort, order} = sortSettings;

    const headerArray = [
        {text: 'ID', name: 'id'},
        {text: 'Заголовок', name: 'title'},
        {text: 'Описание', name: 'body'},
    ];

    const header = headerArray.map((head, index) => {
            return (
                <th key={`head_${head.name}`}
                    onClick={() => setSort(head.name, `${sort === head.name && order === 'asc' ? 'desc' : 'asc'}`)}
                >
                    {head.text}
                    {sort === head.name && <img src={order === 'asc' ? arrowDown : arrowUp} alt="Sort icon"/>}
                </th>
            );
        })

    const rows = posts.map((post) => {
        return (
            <tr key={`post_${post.id}`}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
        );
    });

    return (
        <Table className={s.table}>
            <thead className={s.head}>
                <tr>
                    {header}
                </tr>
            </thead>
            <tbody className={s.body}>
                {rows}
            </tbody>
        </Table>
    );
};

export default PostsTable;
