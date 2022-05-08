/**
 * this model specifies the format to exchange a social performance with the backend
 */
export class SocialPerformance {
  constructor(
    public _leadershipCompetence: number[],
    public _opennessToEmployee: number[],
    public _socialBehaviourToEmployee: number[],
    public _attitudeTowardsClient: number[],
    public _communicationSkills: number[],
    public _integrityToCompany: number[]
  ) { }
}
