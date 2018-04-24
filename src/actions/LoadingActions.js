export const LOADING = {
  ON: "LOADING_ON",
  OFF: "LOADING_OFF"
}

export const showLoading = () => {
  return {
    type: LOADING.ON,
    loading: true
  }
}

export const hideLoading = () => {
  return {
    type: LOADING.OFF,
    loading: false
  }
}