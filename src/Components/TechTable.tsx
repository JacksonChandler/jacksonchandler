export interface TechTableProps {
  techs: string[];
}

export function TechTable(props: TechTableProps) {
  return (
    <table>
      <tbody>
        {props.techs.map((tech, index) => (
          <tr key={index}>
            <td>{tech}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
