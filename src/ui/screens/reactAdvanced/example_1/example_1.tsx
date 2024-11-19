import React, { ChangeEvent, useState } from 'react';
import { Box, Button, Input, Space, Table } from '@mantine/core';
import * as jsonTable from '../mock_table/table_10000.json';
import { TableItems } from '../types';

export const Example_1 = () => {
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [button1, setButton1] = useState<string>('ON');

  const handleInput1 = (event: ChangeEvent<HTMLInputElement>) => setInput1(event.currentTarget.value);
  const handleInput2 = (event: ChangeEvent<HTMLInputElement>) => setInput2(event.currentTarget.value);
  const handleButton1 = () =>
    setButton1((prevState) => {
      return prevState === 'OFF' ? 'ON' : 'OFF';
    });

  const table = JSON.parse(JSON.stringify(jsonTable)).default

  const rows = table.map((element: TableItems) => (
      <tr key={element._id}>
          <td>{element.name}</td>
          <td>{element.age}</td>
          <td>{element.gender}</td>
          <td>{element.eyeColor}</td>
          <td>{element.email}</td>
          <td>{element.favoriteFruit}</td>
      </tr>
  ));

  return (
    <Box style={{ padding: '64px' }}>
      <Input placeholder="input #1" value={input1} onChange={handleInput1} />
      <Space h={32} />
      <Input placeholder="input #2" value={input2} onChange={handleInput2} />
      <Space h={32} />
      <Button variant={'outline'} onClick={handleButton1}>
        {button1}
      </Button>
      <Space h={32} />
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Eye Color</th>
            <th>Email</th>
            <th>Favorite Fruit</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};
