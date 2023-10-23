import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateLocalData = createAsyncThunk(
  'data/updateLocalData',
  async updatedObject => {
    const apiUrl = './data.json';

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const existingData = await response.json();

    if (existingData) {
      const updatedData = existingData.products.map(obj => {
        if (obj.id === updatedObject.id) {
          console.log('aaa');
          return { ...obj, ...updatedObject };
        }
        return obj;
      });

      const updateResponse = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!updateResponse.ok) {
        throw new Error('Failed to update data');
      }
    } else {
      throw new Error('Invalid data format');
    }

    return updatedObject;
  }
);
