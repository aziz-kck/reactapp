import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Performance Tests', () => {
  it('should load the application within expected time', async () => {
    const { getByText } = render(<App />);

    // Measure initial loading time
    const startTime = performance.now();
    // Wait for the application to render
    await getByText('React Todo');
    const endTime = performance.now();
    
    const loadTime = endTime - startTime;
    expect(loadTime).toBeLessThan(2000); // Example: Expect load time to be less than 2 seconds
  });

  it('should handle adding and removing tasks efficiently', async () => {
    const { getByText, getByPlaceholderText, queryByText } = render(<App />);

    // Add multiple tasks
    const input = getByPlaceholderText('Add a new task...');
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.submit(getByText('Add'));
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.submit(getByText('Add'));

    // Measure time to add tasks
    const startTime = performance.now();
    await getByText('Task 1');
    await getByText('Task 2');
    const endTime = performance.now();
    
    const addTaskTime = endTime - startTime;
    expect(addTaskTime).toBeLessThan(1000); // Example: Expect adding tasks to be less than 1 second

    // Remove tasks
    fireEvent.click(queryByText('Task 1').closest('button'));
    fireEvent.click(queryByText('Task 2').closest('button'));

    // Measure time to remove tasks
    const removeStartTime = performance.now();
    expect(queryByText('Task 1')).toBeNull();
    expect(queryByText('Task 2')).toBeNull();
    const removeEndTime = performance.now();
    
    const removeTaskTime = removeEndTime - removeStartTime;
    expect(removeTaskTime).toBeLessThan(500); // Example: Expect removing tasks to be less than 0.5 seconds
  });
});
