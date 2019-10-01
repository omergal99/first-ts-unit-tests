import DataFormService from './DataFormService';

async function getFormData() {
  const initialState = await DataFormService.getData();
  return Promise.resolve(initialState)
}

export default {
  getFormData,
}
