import * as request from '~/utils/request';

export const searchUser = async (inputValue) => {
  try {
    const res = await request.get('/users/search', {
      params: {
        q: encodeURIComponent(inputValue),
        type: 'less',
      },
    });
    return res.data;
    // setSearchResult(res.data);
    // setLoading(false);
  } catch (error) {
    // setLoading(false);
  }
};
