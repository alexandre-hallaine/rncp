export default defineEventHandler(async event => {
  const projects = await getProjects();
  const projectMap = new Map(projects.map(p => [p.id, p]));

  const data = await queryCollection(event, 'titles').all();

  return data.map(({ meta: { body: title } }) => {
    const mapProjects = ids => ids.map(id => projectMap.get(id)).filter(Boolean);

    title.professional.projects = mapProjects(title.professional.projects);
    title.suite.projects = mapProjects(title.suite.projects);

    title.specializations.forEach(specialization => {
      specialization.categories.forEach(category => {
        category.projects = mapProjects(category.projects);
      });
    });

    return title;
  });
})
