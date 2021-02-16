require "rails_helper"

RSpec.describe NotePresenter do
  subject { NotePresenter.new(note: note) }


  describe "#is_recent" do
    context "when the record is more than 7 days old" do
    let(:note) { FactoryBot.create(:note, created_at: 10.days.ago) }

      it "returns false" do
        expect(subject.is_recent).to be_falsey
      end
    end

    context "when the record is less than 7 days old" do
      let(:note) { FactoryBot.create(:note, created_at: 5.days.ago) }
  
        it "returns false" do
          expect(subject.is_recent).to be_truthy
        end
      end
  end

end