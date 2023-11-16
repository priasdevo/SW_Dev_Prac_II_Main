import HospitalCatalog from "@/components/HospitalCatalog";
import { render, waitFor, screen } from "@testing-library/react";
import { hospitalData } from "./data";
describe("HospitalCatalog", () => {
  it("should have correct amout of image in HospitalCatalog", async () => {
    const hospitalCatalog = await HospitalCatalog({
      hospitalJson: hospitalData,
    });

    render(hospitalCatalog);

    await waitFor(() => {
      const hospitalImages = screen.queryAllByRole("img");
      expect(hospitalImages.length).toEqual(4);
    });
  });
});
