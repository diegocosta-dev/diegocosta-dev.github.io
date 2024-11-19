const ListProjects = () => {
  return (
    <ul>
      <li className="flex flex-col gap-2 p-6 border rounded-lg border-stone-900 dark:border-slate-50">
        <h3 className="font-semibold text-lg">
          Project Name
        </h3>
        <p>
          Project description
        </p>
        <a href="" className="font-light hover:underline">
          Learn More
        </a>
      </li>
    </ul>
  )
}

export default ListProjects;