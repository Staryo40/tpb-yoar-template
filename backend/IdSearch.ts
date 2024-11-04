import { fetchMainContent, fetchMainContentById, fetchSideBar, fetchSideBarById, fetchSoal, fetchSoalById } from "./StrapiService";

export const searchMainContentId = async (pageName: string): Promise<number | null> => {
  try {
    const responseMainContent = await fetchMainContent();
    const totalItem = responseMainContent.meta.pagination.total;

    for (let i = 1; i <= totalItem; i++) {
      const content = await fetchMainContentById(i);
      const name = content.data.attributes.Name;

      if (name === pageName) {
        return content.data.id;
      }
    }
    console.log(`Main Content '${pageName}' not found.`);
    return null
  } catch (error) {
    console.error('Error fetching content:', error);
    throw error
  }
}

export const searchSidebarId = async (sidebarName: string): Promise<number | null> => {
  try {
    const responseSidebar = await fetchSideBar();
    const totalItem = responseSidebar.meta.pagination.total;

    for (let i = 1; i <= totalItem; i++) {
      const content = await fetchSideBarById(i);
      const name = content.data.attributes.Name;

      if (name === sidebarName) {
        return content.data.id;
      }
    }
    console.log(`Sidebar '${sidebarName}' not found.`);
    return null
  } catch (error) {
    console.error('Error fetching content:', error);
    throw error
  }
}

export const searchSoalId = async (soalName: string): Promise<number | null> => {
  try {
    const responseSoal = await fetchSoal();
    const totalItem = responseSoal.meta.pagination.total;

    for (let i = 1; i <= totalItem; i++) {
      const content = await fetchSoalById(i);
      const name = content.data.attributes.Name;

      if (name === soalName) {
        return content.data.id;
      }
    }
    console.log(`Soal '${soalName}' not found.`);
    return null
  } catch (error) {
    console.error('Error fetching content:', error);
    throw error
  }
}

