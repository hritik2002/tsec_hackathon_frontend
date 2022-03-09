
const CompanyDashboard = () => {
    return (
        <>
        <div className='applications'>
        <h3 className='text-center mb-4'>Candidates Applications</h3>
          <table className="striped mt-3">
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Profile</th>
                  <th>Applied On</th>
                  <th>Application Status</th>
              </tr>
            </thead>
    
            <tbody>
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>$0.87</td>
                <td><span className="new badge blue" data-badge-caption="In Touch">.</span></td>
              </tr>
              <tr>
                <td>Alan</td>
                <td>Jellybean</td>
                <td>$3.76</td>
                <td><span className="new badge blue" data-badge-caption="In Touch">.</span></td>
              </tr>
              <tr>
                <td>Jonathan</td>
                <td>Lollipop</td>
                <td>$7.00</td>
                <td><span className="new badge" data-badge-caption="Accepted">.</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
    );
};

export default CompanyDashboard;