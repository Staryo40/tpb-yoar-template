import axios from 'axios';

export const STRAPI_BASE_URL = 'http://localhost:1337'; // Replace with your Strapi URL

// Function to fetch Main Content by ID
export const fetchMainContentById = async (id: number) => {
  try {
    const response = await axios.get(`${STRAPI_BASE_URL}/api/main-contents/${id}?populate=Content.image`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Main Content with ID ${id}:`, error);
    throw error;
  }
};

export const fetchMainContent = async () => {
  try {
    const response = await axios.get(`${STRAPI_BASE_URL}/api/main-contents`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchHomePageModule = async (id: number) => {
  try {
    const response = await axios.get(`${STRAPI_BASE_URL}/api/homepage-modules/${id}?populate=*`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Main Content with ID ${id}:`, error);
    throw error;
  }
};

export const fetchNavBar = async () => {
  try {
    const response = await axios.get(`${STRAPI_BASE_URL}/api/nav-bars/1?populate=*`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchSideBarById = async (id: number) => {
  try {
    const response = await axios.get(`${STRAPI_BASE_URL}/api/sidebars/${id}?populate=*`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Main Content with ID ${id}:`, error);
    throw error;
  }
};

export const fetchSideBar = async () => {
  try {
    const response = await axios.get(`${STRAPI_BASE_URL}/api/sidebars?populate=*`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchSoalById = async (id: number) => {
  try {
    const response = await axios.get(`${STRAPI_BASE_URL}/api/soal-contents/${id}?populate[Question][populate][0]=soal_question.Content.image&populate[Question][populate][1]=soal_solution.Content.image`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Main Content with ID ${id}:`, error);
    throw error;
  }
};

export const fetchSoal = async () => {
  try {
    const response = await axios.get(`${STRAPI_BASE_URL}/api/soal-contents`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};