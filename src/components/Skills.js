import React from 'react';

const Skills = () => {
   const skills = [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 90 },
    { name: 'Next.js API', level: 75 },
    { name: 'MySQL', level: 80 },
    { name: 'Git & GitHub', level: 85 },
    
  ];

  return (
    <section
      id="skills"
      style={{
        padding: '60px 0',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Skills</h2>
          <div style={{
            width: '60px',
            height: '4px',
            backgroundColor: '#007bff',
            margin: '0 auto',
          }}></div>
        </div>

        <div>
          <p style={{
            maxWidth: '700px',
            margin: '0 auto 40px',
            textAlign: 'center',
            color: '#555',
            lineHeight: '1.6'
          }}>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
            Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div>
          {skills.map((skill, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
                fontWeight: 'bold',
                color: '#333',
              }}>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div style={{
                width: '100%',
                height: '10px',
                backgroundColor: '#e0e0e0',
                borderRadius: '5px',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: `${skill.level}%`,
                  height: '100%',
                  backgroundColor: '#007bff',
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
