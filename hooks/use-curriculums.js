import useFetch from "./use-fetch";

const useCurriculums = () => {
  const { data, error } = useFetch(`/api/curriculums`);
  const numberOfCurriculums = 3;

  if (error || !data) return undefined;
  const curriculums = data
    .map((curriculum) => ({
      text: curriculum.name,
      url: `/curriculums/${curriculum.id}`,
    }))
    .slice(0, numberOfCurriculums);

  return curriculums;
};

export default useCurriculums;
